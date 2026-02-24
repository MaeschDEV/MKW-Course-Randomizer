import 'package:flutter_test/flutter_test.dart';
import 'package:mkw_randomizer/services/randomizer_service.dart';
import 'package:mkw_randomizer/models/map_model.dart';

void main() {
  group('RandomizerService Tests', () {
    late RandomizerService randomizerService;

    setUp(() {
      randomizerService = RandomizerService();
      randomizerService.initialize();
    });

    test('Should initialize with all maps', () {
      expect(randomizerService.getTotalMapsCount(), greaterThan(0));
      expect(randomizerService.getRemainingMapsCount(), 
             equals(randomizerService.getTotalMapsCount()));
    });

    test('Should return different maps when getting next map', () {
      final map1 = randomizerService.getNextMap();
      final map2 = randomizerService.getNextMap();
      
      expect(map1, isA<MapModel>());
      expect(map2, isA<MapModel>());
      
      // Maps should be different (unless we have only one map)
      if (randomizerService.getTotalMapsCount() > 1) {
        expect(map1.title, isNot(equals(map2.title)));
      }
    });

    test('Should track remaining maps correctly', () {
      final initialCount = randomizerService.getRemainingMapsCount();
      
      randomizerService.getNextMap();
      expect(randomizerService.getRemainingMapsCount(), 
             equals(initialCount - 1));
    });

    test('Should reshuffle when all maps are exhausted', () {
      final totalMaps = randomizerService.getTotalMapsCount();
      
      // Generate all maps
      for (int i = 0; i < totalMaps; i++) {
        randomizerService.getNextMap();
      }
      
      expect(randomizerService.getRemainingMapsCount(), equals(0));
      
      // Getting next map should reshuffle
      final nextMap = randomizerService.getNextMap();
      expect(nextMap, isA<MapModel>());
      expect(randomizerService.getRemainingMapsCount(), 
             equals(totalMaps - 1));
    });

    test('Should reset properly', () {
      // Use some maps
      randomizerService.getNextMap();
      randomizerService.getNextMap();
      
      // Reset
      randomizerService.reset();
      randomizerService.initialize();
      
      expect(randomizerService.getRemainingMapsCount(), 
             equals(randomizerService.getTotalMapsCount()));
    });
  });
}
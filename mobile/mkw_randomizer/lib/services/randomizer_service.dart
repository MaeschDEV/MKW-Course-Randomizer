import 'dart:math';
import '../models/map_model.dart';
import '../data/maps_data.dart';

class RandomizerService {
  static final RandomizerService _instance = RandomizerService._internal();
  factory RandomizerService() => _instance;
  RandomizerService._internal();

  final Random _random = Random();
  List<MapModel> _shuffledMaps = [];
  int _currentIndex = 0;

  /// Initialize the randomizer with shuffled maps
  void initialize() {
    _shuffleMaps();
    _currentIndex = 0;
  }

  /// Shuffle all maps to create a new random order
  void _shuffleMaps() {
    _shuffledMaps = List<MapModel>.from(MapsData.allMaps);
    _shuffledMaps.shuffle(_random);
  }

  /// Get the next map from the shuffled list
  /// If we reach the end, reshuffle and start over
  MapModel getNextMap() {
    // If we haven't initialized or reached the end, shuffle
    if (_shuffledMaps.isEmpty || _currentIndex >= _shuffledMaps.length) {
      _shuffleMaps();
      _currentIndex = 0;
    }

    final currentMap = _shuffledMaps[_currentIndex];
    _currentIndex++;

    return currentMap;
  }

  /// Get remaining maps count in current shuffle
  int getRemainingMapsCount() {
    if (_shuffledMaps.isEmpty) return 0;
    return _shuffledMaps.length - _currentIndex;
  }

  /// Get total maps count
  int getTotalMapsCount() => MapsData.allMaps.length;

  /// Reset the randomizer
  void reset() {
    _shuffledMaps.clear();
    _currentIndex = 0;
  }
}

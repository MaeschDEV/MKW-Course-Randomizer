// This is a basic Flutter widget test.
//
// To perform an interaction with a widget in your test, use the WidgetTester
// utility in the flutter_test package. For example, you can send tap and scroll
// gestures. You can also use WidgetTester to find child widgets in the widget
// tree, read text, and verify that the values of widget properties are correct.

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

import 'package:mkw_randomizer/main.dart';

void main() {
  testWidgets('Mario Kart World Randomizer smoke test', (WidgetTester tester) async {
    // Build our app and trigger a frame.
    await tester.pumpWidget(const MyApp());

    // Verify that our app shows the correct title
    expect(find.text('Mario Kart World Randomizer'), findsOneWidget);
    
    // Verify that the start button is present
    expect(find.text('Start Randomizing'), findsOneWidget);
    
    // Verify that statistics are shown
    expect(find.text('Total Maps'), findsOneWidget);
    expect(find.text('Remaining'), findsOneWidget);

    // Tap the generate button and trigger a frame.
    await tester.tap(find.text('Start Randomizing'));
    await tester.pump();

    // Verify that the button text changed
    expect(find.text('Generate Next Map'), findsOneWidget);
    expect(find.text('Start Randomizing'), findsNothing);
  });
}

import * as React from 'react';
import Todo from './Todo';
import {TestPreviewComponent} from '@react-native-test-preview/test-preview';
import {LogBox} from 'react-native';

LogBox.ignoreAllLogs();

export default function App() {
  const previewEnabled = process.env.TEST_PREVIEW;

  if (previewEnabled) {
    return <TestPreviewComponent />;
  } else {
    return <Todo />;
  }
}

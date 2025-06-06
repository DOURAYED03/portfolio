// MySplineScene.jsx
import React, { Component } from 'react';
import Spline from '@splinetool/react-spline';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    // You can log error info here if needed
  }
  render() {
    if (this.state.hasError) {
      return null; // Render nothing if error occurs
    }
    return this.props.children;
  }
}

export default function MySplineScene() {
  return (
    <ErrorBoundary>
      <div style={{ width: '100%', height: '600px' }}>
        <Spline scene="https://prod.spline.design/7a1f7a1f-7a1f-7a1f-7a1f-7a1f7a1f7a1f/scene.splinecode" />
      </div>
    </ErrorBoundary>
  );
}

import React, { Component } from 'react'
import { run } from '@cjy0208/tools'
import { Result, Button } from 'antd'

export interface ErrorBoundaryProps {
  console?: boolean
  onError?: (error: Error) => void
  children?: React.ReactNode
  fallback?: ((error: Error, retry: () => void) => React.ReactNode) | React.ReactNode
}

export interface ErrorBoundaryState {
  error?: Error
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  static defaultProps = {
    console: false,
    fallback: (error: Error, retry: () => void, boundaryProps: ErrorBoundaryProps) => (
      <Result
        className="f-pro-utils-error-boundary-result"
        status="error"
        title={error?.message}
        extra={
          <Button type="primary" onClick={retry}>
            Retry
          </Button>
        }
      />
    ),
  }

  state = {
    error: undefined,
  }

  componentDidCatch(error: Error) {
    const { onError } = this.props

    run(onError, undefined, error)

    this.setState({
      error,
    })
  }

  retry = () => {
    this.setState({
      error: undefined,
    })
  }

  render() {
    const { children, fallback } = this.props
    const { error } = this.state

    return (error ? run(fallback, undefined, error, this.retry, this.props) : children) as JSX.Element
  }
}

import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            errorInfo: null,
            hasError: false
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error(error, errorInfo);
        this.setState({ error, errorInfo });
    }

    handleClick(e) {
        e.preventDefault();

        location.reload();
    }

    render() {
        if (this.state.hasError) {
            return (<div className="error">
                <h1 className="error">Wystapił błąd!</h1>
                <div>
                    {this.state.error && this.state.error.toString()}
                    <br />
                    {this.state.errorInfo && this.state.errorInfo.componentStack}
                </div>
                <a href="#" onClick={this.handleClick} className="button">Spróbuj ponownie</a>
            </div>);
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
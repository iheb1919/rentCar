import {FallbackProps} from "react-error-boundary"

const ErrorBoundryC = (props:FallbackProps) => {
  const {error,resetErrorBoundary}=props


  return (
    <div className='error-page min-h-screen flex items-center justify-center'>
        <div className='text-center'>
            <h1 className='text-5xl font-semibold text-red mb-4'>Error !!</h1>
            <p className='text-2xl text-gray-300 font-semibold'> {error?.message} </p>
            <a href='/' className='mt-4' onClick={resetErrorBoundary}>
                    Back to Home
            </a>
              <p>If Error Persiste please LogOut </p>
              <button >
                Logout
              </button>
        </div>

    </div>
  )
}

export default ErrorBoundryC
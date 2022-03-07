import React, { createContext, useState, ReactNode, Context } from 'react'

interface ILoaderContext {
  loading: boolean
  setLoading: any
}

const INITIAL_CONTEXT = {
  loading: false,
  setLoading: null
}

export const LoaderContext: Context<ILoaderContext> = createContext<ILoaderContext>(INITIAL_CONTEXT)

export const LoaderContextProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false)
  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {loading ? (
        <div className="general-loader">
          <div className="loader-img">
            <span>Loading</span>
          </div>
        </div>
      ) : (
        ''
      )}
      {children}
    </LoaderContext.Provider>
  )
}

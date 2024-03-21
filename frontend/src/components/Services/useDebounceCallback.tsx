import { useEffect, useRef } from "react";

type CallbackArgs = any[];

type Callback = (...args: CallbackArgs) => void;

type UseDebouncedCallback = (callback: Callback, wait: number) => (...args: CallbackArgs) => void;

const useDebouncedCallback: UseDebouncedCallback = (callback, wait) => {
 const argsRef = useRef<CallbackArgs>();
 const timeout = useRef<NodeJS.Timeout | null>(null);

 function cleanup() {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
 }
 useEffect(() => cleanup, []);

 return function debouncedCallback(...args: CallbackArgs) {
    argsRef.current = args;
    cleanup();

    timeout.current = setTimeout(() => {
      if (argsRef.current) {
        callback(...argsRef.current);
      }
    }, wait);
 };
};

export default useDebouncedCallback;
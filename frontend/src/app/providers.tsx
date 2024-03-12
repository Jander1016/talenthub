import { ThemeProvider } from "next-themes";
import { SearchProvider } from "./search/page"; 

export function Providers({ children }) {
 return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <SearchProvider>
        {children}
      </SearchProvider>
    </ThemeProvider>
 );
}
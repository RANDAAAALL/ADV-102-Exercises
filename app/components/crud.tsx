import { ThemeProvider } from "./BackgroundTheme";
import { CrudScreenContent } from "./CrudScreenContent";

export default function CrudScreen(){

    return (
        <ThemeProvider>
            <CrudScreenContent />
        </ThemeProvider>
    );
}
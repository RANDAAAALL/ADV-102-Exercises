import { ThemeProvider } from "./BackgroundTheme";
import QuizScreenContent from "./QuizScreenContent";


export default function QuizScreen(){
    return (
        <ThemeProvider>
            <QuizScreenContent />
        </ThemeProvider>
    );
}
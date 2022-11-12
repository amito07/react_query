import MainLayout from "./Layouts/MainLayout";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
const queryClient = new QueryClient();
function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<MainLayout />
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
}

export default App;

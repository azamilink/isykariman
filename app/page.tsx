import Header from '@/components/Header';
import Home from '@/pages/Home';
import { Toaster } from '@/components/ui/sonner';
import './page.css';

export default function App() {
	return (
		<div className='App'>
			<Header />
			<Home />
			<Toaster
				position='top-center'
				richColors
			/>
		</div>
	);
}

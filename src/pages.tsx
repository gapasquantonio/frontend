import { Routes, Route } from 'react-router-dom';
import Layout from './layout';
import Homepage from './routes/home-page';

export default function Pages() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="/" element={<Homepage />} />
				<Route path="*" element={<>not found</>} />
			</Route>
		</Routes>
	);
}

import { Routes, Route } from 'react-router-dom';
import Layout from './layout';

export default function Pages() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="/" element={<>home page</>} />
				<Route path="*" element={<>not found</>} />
			</Route>
		</Routes>
	);
}

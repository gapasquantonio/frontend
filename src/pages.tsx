import React from 'react';
import { Routes, Route } from 'react-router-dom';

export default function Pages() {
	return (
		<Routes>
			<Route path="/">
				<Route path="/" element={<>home page</>} />
				<Route path="*" element={<>not found</>} />
			</Route>
		</Routes>
	);
}

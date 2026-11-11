import { useState, useCallback } from "react";
import api from "../services/api";

function useApi() {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const execute = useCallback(async (config) => {
		setLoading(true);
		setError(null);

		try {
			const response = await api(config);

			setData(response.data);

			return response.data;
		} catch (error) {
			const message = error.response?.data?.message || "Произошла ошибка";

			setError(message);

			return null;
		} finally {
			setLoading(false);
		}
	}, []);

	return {
		data,
		loading,
		error,
		execute,
  };
}

export default useApi;

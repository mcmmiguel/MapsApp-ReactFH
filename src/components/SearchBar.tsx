import { useRef, ChangeEvent } from 'react';

export const SearchBar = () => {

    const debounceRef = useRef<NodeJS.Timeout>();

    const onQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (debounceRef.current)
            clearTimeout(debounceRef.current);

        debounceRef.current = setTimeout(() => {
            // Realizar consulta
            console.log('debounced value:', event.target.value);
        }, 400)

    }

    return (
        <div className="search-container">
            <input
                type="text"
                className="form-control"
                placeholder="Buscar lugar..."
                onChange={onQueryChange}
            />
        </div>
    )
}
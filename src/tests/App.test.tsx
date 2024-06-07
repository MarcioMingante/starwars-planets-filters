import { render, screen } from '@testing-library/react';
import { vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import App from '../App';
import APIInfoProvider from '../context/APIInfoProvider';
import mockData from './mock/mockData';

describe('Testando o componente app', () => {
  test('Testa se existe uma search bar que atualiza a lista de planetas', async () => {
    global.fetch = vi.fn(() => Promise.resolve({
      json: () => Promise.resolve(mockData),
    }));
    render(
    <APIInfoProvider>
      <App />
    </APIInfoProvider>
    );

    const searchBar = screen.getByTestId('name-filter');
    expect(searchBar).toBeInTheDocument();

    await userEvent.type(searchBar, 'oo');
    const planet1 = screen.getByText('Tatooine');
    const planet2 = screen.getByText('Naboo');
    expect(planet1 && planet2).toBeInTheDocument();
  })

  test('Testa se é possivel filtrar os planetas atraves do filtro presente no header', async () => {
    global.fetch = vi.fn(() => Promise.resolve({
      json: () => Promise.resolve(mockData),
    }));
    render(
    <APIInfoProvider>
      <App />
    </APIInfoProvider>
    );

    const selectFilter = screen.getByTestId('column-filter');
    await userEvent.selectOptions(selectFilter, 'rotation_period');
    const filterBtn = screen.getByTestId('button-filter');
    await userEvent.click(filterBtn);

    const currentFilter = screen.getByTestId('filter');
    expect(currentFilter).toBeInTheDocument();

    const selectOperator = screen.getByTestId('comparison-filter')
    await userEvent.selectOptions(selectOperator, 'menor que')
    await userEvent.click(filterBtn);

    await userEvent.selectOptions(selectOperator, 'igual a')
    await userEvent.click(filterBtn);
  })

  test('Testa se é possivel apagar todos os filtros aplicados', async () => {
    global.fetch = vi.fn(() => Promise.resolve({
      json: () => Promise.resolve(mockData),
    }));
    render(
    <APIInfoProvider>
      <App />
    </APIInfoProvider>
    );

    const selectFilter = screen.getByTestId('column-filter');
    const filterBtn = screen.getByTestId('button-filter');
    await userEvent.selectOptions(selectFilter, 'rotation_period');
    await userEvent.click(filterBtn);
    const currentFilter = screen.getByTestId('filter');
    const removeFilter = screen.getByRole('button', { name: 'img' })
    await userEvent.click(removeFilter)
    expect(currentFilter).not.toBeInTheDocument()

    await userEvent.selectOptions(selectFilter, 'population');
    await userEvent.click(filterBtn);

    const clearFiltersBtn = screen.getByTestId('button-remove-filters');
    await userEvent.click(clearFiltersBtn);

    expect(currentFilter).not.toBeInTheDocument()
    
  })

  test('Testa se é possivel mudar a ordem dos planetas entre ascendente e descendente', async () => {
    global.fetch = vi.fn(() => Promise.resolve({
      json: () => Promise.resolve(mockData),
    }));
    render(
    <APIInfoProvider>
      <App />
    </APIInfoProvider>
    );

    const selectDESCSort = screen.getByTestId('column-sort-input-desc')
    const selectASCSort = screen.getByTestId('column-sort-input-asc');
    const sortBtn = screen.getByTestId('column-sort-button')
    await userEvent.click(selectASCSort);
    await userEvent.click(sortBtn)
    await userEvent.click(selectDESCSort);
    await userEvent.click(sortBtn)

  })

})

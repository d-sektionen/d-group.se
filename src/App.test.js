import { render, screen, fireEvent, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import CardGrid from './components/Groupies/Card';
import Ourfriends from './components/Friends';

beforeEach(() => { window.location.hash = '#/'; });

test('navigates from the homepage to contact information', async () => {
  render(<App />);
  expect(screen.getByText('D-Group 26/27')).toBeInTheDocument();
  userEvent.click(screen.getByRole('link', { name: 'Kontakt' }));
  expect(await screen.findByText('Allmän kontakt')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'j9@d-group.se' }))
    .toHaveAttribute('href', 'mailto:j9@d-group.se');
});

test('desktop Instagram points to the current group', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: 'Instagram' }))
    .toHaveAttribute('href', 'https://www.instagram.com/dgroup2627/');
});

const member = {
  name: 'Test Member', post: 'Webb', email: 'test@example.com',
  image: 'portrait.jpg', smallImage: 'portrait.jpg', age: '2005',
  home: 'Linköping', pors: 'Datateknik', cons: 'Dart',
};

test('opens a profile using the keyboard and closes it with Escape', () => {
  render(<CardGrid user={member} />);
  userEvent.tab();
  expect(screen.getByRole('link', { name: member.email })).toHaveFocus();
  userEvent.tab();
  expect(screen.getByRole('button', { name: `Läs mer om ${member.name}` })).toHaveFocus();
  userEvent.type(screen.getByRole('button', { name: `Läs mer om ${member.name}` }), '{enter}', { skipClick: true });
  expect(screen.getByRole('dialog', { name: member.name })).toBeInTheDocument();
  userEvent.type(screen.getByRole('button', { name: 'Stäng' }), '{esc}', { skipClick: true });
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
});

test('email clicks do not open the profile', () => {
  render(<CardGrid user={member} />);
  userEvent.click(screen.getByRole('link', { name: member.email }));
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
});

test('renders all friends including sKVaLp with the correct destinations', () => {
  render(<Ourfriends />);
  expect(screen.getAllByRole('link')).toHaveLength(14);
  expect(screen.getByRole('link', { name: 'sKVaLp' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'ClubMästeriet' }))
    .toHaveAttribute('href', 'https://clubmasteriet.se/');
  expect(screen.getByRole('link', { name: 'SSKål' }))
    .toHaveAttribute('href', 'https://www.sskal.se/');
});


test('unknown addresses show a way back to the homepage', async () => {
  window.location.hash = '#/missing-page';
  render(<App />);
  expect(screen.getByRole('heading', { name: 'Sidan hittades inte' })).toBeInTheDocument();
  userEvent.click(screen.getByRole('link', { name: 'Till startsidan' }));
  expect(await screen.findByText('D-Group 26/27')).toBeInTheDocument();
});

test('menu items support arrow keys and close after navigation', async () => {
  render(<App />);
  userEvent.click(screen.getByRole('button', { name: 'Öppna meny' }));
  const menu = screen.getByRole('menu');
  const start = within(menu).getByRole('menuitem', { name: 'Start' });
  start.focus();
  fireEvent.keyDown(start, { key: 'ArrowDown' });
  const groupies = within(menu).getByRole('menuitem', { name: 'Groupies' });
  expect(groupies).toHaveFocus();
  userEvent.click(groupies);
  expect(await screen.findByText('Nanna Linder')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Öppna meny' })).toHaveAttribute('aria-expanded', 'false');
});

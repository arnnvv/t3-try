import Button from "./Button";

const TopNav = (): JSX.Element => {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div>Galary</div>

      <Button text="Sign In" />
    </nav>
  );
};

export default TopNav;

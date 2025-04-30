export default function Login() {
  return (
    <div className="p-4">
      <form className="inline-flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          className="mb-2 p-1 rounded-lg"
          type="email"
          name="email"
          placeholder="input email"
        />
        <label htmlFor="email">Password</label>
        <input
          className="mb-2 p-1 rounded-lg"
          type="password"
          name="password"
          placeholder="input password"
        />
        <button
          type="Sumit"
          className="bg-background2 shadow-foreground shadow-standard px-3 py-1 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

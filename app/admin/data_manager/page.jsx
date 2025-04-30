export default function DataManager() {
  return (
    <div className="p-4">
      <textarea
        className="bg-background2 p-3 text-foreground"
        name="data"
        defaultValue={"tes"}
      ></textarea>
      <button className="block bg-background2 shadow-foreground shadow-standard px-5 py-2 rounded-md">
        Submit
      </button>
    </div>
  );
}

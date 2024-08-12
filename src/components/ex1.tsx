export default function Ex1() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="container mx-auto mt-4 max-w-[600px] space-y-6 rounded-md border-2 border-purple-600 bg-white p-4 text-purple-950 shadow-md"
    >
      <div className="space-y-1">
        <label htmlFor="required" className="block text-sm font-semibold">
          Required Field
        </label>
        <input
          className="my-input"
          id="required"
          placeholder="Required Field"
          required
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="disabled" className="block text-sm font-semibold">
          Disabled Field
        </label>
        <input
          className="my-input disabled:opacity-70"
          id="disabled"
          placeholder="Disabled Field"
          disabled
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="input" className="block text-sm font-semibold">
          {" "}
          Input Field{" "}
        </label>
        <input id="input" className="my-input" placeholder="Input Field" />
      </div>

      <div className="space-x-1">
        <input id="terms" type="checkbox" />
        <label htmlFor="terms">I accept the terms and conditions.</label>
      </div>

      <div className="space-x-2">
        <button className="btn bg-purple-300">Submit</button>
        <button className="btn text-purple-700">Reset</button>
        <button className="btn disabled:opacity-40" disabled>
          Disabled
        </button>
      </div>
    </form>
  );
}

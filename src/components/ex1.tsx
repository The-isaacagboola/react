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
        <input
          id="terms"
          type="checkbox"
          className="cursor-pointer rounded-[20%] accent-slate-700"
        />
        <label htmlFor="terms text-xl ">
          I accept the terms and conditions.
        </label>
      </div>

      <div className="space-x-2">
        <button className="btn bg-purple-300 hover:text-white">Submit</button>
        <button className="btn text-purple-700 hover:text-black">Reset</button>
        <button
          className="btn disabled:cursor-not-allowed disabled:opacity-40"
          disabled
        >
          Disabled
        </button>
      </div>
    </form>
  );
}

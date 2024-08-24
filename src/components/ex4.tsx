export default function Ex4() {
  return (
    <div>
      <h1>After and Before</h1>

      <div className="mt-5 flex flex-col-reverse">
        <input
          required
          className="peer mt-2 rounded-md border-2 p-2"
          type="text"
          placeholder="Enter input here..."
        />
        <p className="peer-required:after:text-red-400 peer-required:after:ml-1 peer-required:after:content-['*']">
          Required Field
        </p>
      </div>
    </div>
  );
}

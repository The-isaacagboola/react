export default function Ex2() {
  return (
    <div className="mt-4 text-xl">
      <h1 className="text-center text-3xl font-bold">Heading</h1>
      <p>The red backgound up in the inputs there was achieved with a ring </p>
      <div className="h-10 w-full bg-red-500 text-center">
        <p className="my-auto">Hi</p>
      </div>

      <div>
        <input
          className="my-input peer mt-4"
          type="email"
          placeholder="Enter Email Address"
        />
        <p className="hidden text-red-700 peer-invalid:block">
          Please enter correct email
        </p>
      </div>
      <div>
        <input
          className="my-input peer mt-4"
          type="date"
          placeholder="Enter Email Address"
        />
        <p className="invisible text-red-700 peer-focus:visible">
          Please enter correct date
        </p>
      </div>
      <div className="flex items-center gap-4">
        <input
          className="my-input peer mt-4 h-[40px] w-[40px] accent-red-400"
          name="check"
          type="checkbox"
          placeholder="Enter Email Address"
        />
        <label htmlFor="check" className="peer-checked:visible">
          I consent to all the rules and regulations
        </label>
      </div>
    </div>
  );
}

export default function Group() {
  return (
    <div className="text-2xl">
      <h1 className="basic text-center text-3xl">Groups</h1>
      <p>
        Just like peers that works on an adjacent sibling; Group allows you
        apply unique styles to the children of a grouped parent{" "}
      </p>

      <div className="group">
        <p>
          Question <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa suscipit
          nesciunt eaque facere qui omnis rem nobis libero ratione recusandae,
          accusantium eum excepturi neque saepe a, quaerat eveniet commodi
          necessitatibus.
        </p>

        <p className="group-hover:text-red-400">
          A: Lorem ipsum dolor sit amet.
        </p>
        <p>B: Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
        <p>C: Lorem ipsum dolor sit amet.</p>
      </div>

      <div className="group container mt-8 rounded-md border-2 border-solid border-gray-400 bg-gradient-to-tr from-blue-300/10 to-gray-600/30 p-4 hover:bg-gradient-to-bl hover:from-teal-500/15 hover:to-slate-400 hover:text-white">
        <h1 className="mb-4 font-medium text-purple-900 group-hover:text-white">
          Important Announcement
        </h1>

        <p className="font-sm text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
          alias consectetur voluptate. Rem similique impedit nostrum hic quis
          voluptas deserunt animi reprehenderit nulla nisi quod tempore, at
          perspiciatis eos. Non? Nobis quia ipsam consequatur iusto rerum
          delectus tempore corporis reiciendis sapiente natus, sunt distinctio
          non dignissimos minima esse. Beatae ea dolore atque! Esse ad
          doloremque cum ratione quidem et dolor? Suscipit dolores, animi
          voluptatibus iure assumenda ut vel voluptates reprehenderit possimus
          voluptatem quam incidunt magni minima ipsa, tenetur reiciendis
          nesciunt. Assumenda quod, enim sint consequuntur a earum omnis
          eligendi asperiores?
        </p>

        <button className="mt-[20px] rounded-md border-2 border-solid border-current p-1 hover:bg-slate-300 group-hover:border-white">
          {" "}
          I understand
        </button>
      </div>
    </div>
  );
}

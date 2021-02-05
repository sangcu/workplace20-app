const NewList = () => (
  <section aria-labelledby="announcements-title">
    <div className="rounded-lg bg-white overflow-hidden shadow">
      <div className="p-6">
        <h2 className="text-base font-medium text-gray-900" id="announcements-title">Announcements</h2>
        <div className="flow-root mt-6">
          <ul className="-my-5 divide-y divide-gray-200">
            <li className="py-5">
              <div className="relative focus-within:ring-2 focus-within:ring-cyan-500">
                <h3 className="text-sm font-semibold text-gray-800">
                  <a href="#" className="hover:underline focus:outline-none">
                    {/* Extend touch target to entire panel */}
                    <span className="absolute inset-0" aria-hidden="true" />
                            Office closed on July 2nd
                          </a>
                </h3>
                <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                  Cum qui rem deleniti. Suscipit in dolor veritatis sequi aut. Vero ut earum quis deleniti. Ut a sunt eum cum ut repudiandae possimus. Nihil ex tempora neque cum consectetur dolores.
                        </p>
              </div>
            </li>
            <li className="py-5">
              <div className="relative focus-within:ring-2 focus-within:ring-cyan-500">
                <h3 className="text-sm font-semibold text-gray-800">
                  <a href="#" className="hover:underline focus:outline-none">
                    {/* Extend touch target to entire panel */}
                    <span className="absolute inset-0" aria-hidden="true" />
                            New password policy
                          </a>
                </h3>
                <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                  Alias inventore ut autem optio voluptas et repellendus. Facere totam quaerat quam quo laudantium cumque eaque excepturi vel. Accusamus maxime ipsam reprehenderit rerum id repellendus rerum. Culpa cum vel natus. Est sit autem mollitia.
                        </p>
              </div>
            </li>
            <li className="py-5">
              <div className="relative focus-within:ring-2 focus-within:ring-cyan-500">
                <h3 className="text-sm font-semibold text-gray-800">
                  <a href="#" className="hover:underline focus:outline-none">
                    {/* Extend touch target to entire panel */}
                    <span className="absolute inset-0" aria-hidden="true" />
                            Office closed on July 2nd
                          </a>
                </h3>
                <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                  Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae. Alias consectetur voluptatibus. Accusamus a ab dicta et. Consequatur quis dignissimos voluptatem nisi.
                        </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="mt-6">
          <a href="#" className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            View all
                  </a>
        </div>
      </div>
    </div>
  </section>
)

export default NewList;
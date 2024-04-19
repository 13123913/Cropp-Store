import React, { useState } from "react";

export const Header = ({ card, setCard }) => {
  const [open, setOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignUpClick = () => {
    setShowLogin(true);
  };

  const handleLogin = () => {
    if (username === "Admin" && password === "admin") {
      setIsLoggedIn(true);
      setShowLogin(false);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const closeModal = () => {
    setShowLogin(false);
  };

  return (
    <div className="w-full h-auto bg-neutral-100 l p-4 relative">
      <div className="flex items-center justify-between">
        <div className="text-black/80 font-black opacity-90 text-5xl p-8 select-none flex flex-col items-center hover:text-blue-400 duration-1000">
          Cropp Store
          <div className="text-4xl"></div>
        </div>
        <div className="flex gap-4 p-2">
          <button
            className="font-light text-2xl hover:bg-neutral-300 px-4 py-2 rounded-xl duration-500 hover:text-blue-400"
            onClick={() => setOpen(!open)}>
            CARD
          </button>
          {open ? (
            <div className="absolute w-[700px] min-h-[50px] max-h-[500px] right-11 rounded-lg bg-neutral-200 p-2 top-32 z-10">
              <div className="max-h-[400px] overflow-y-auto rounded-lg flex">
                <div className="flex w-full flex-col gap-4">
                  {card.map((item) => (
                    <div
                      className="flex justify-between w-full bg-neutral-100 p-4 hover:bg-red-200 hover:opacity-90 duration-500 cursor-pointer rounded items-center"
                      key={item.id}
                      onClick={() =>
                        setCard((prev) => {
                          return prev.filter((old) => old.id !== item.id);
                        })
                      }>
                      <div className="">
                        <img src={item.img} className="w-20 h-20 rounded-lg" alt={item.title} />
                      </div>
                      <div className="text-xl font-semibold opacity-80">
                        {item.title}
                      </div>
                      <div className="text-xl font-light">{item.cost},00p</div>
                    </div>
                  ))}
                </div>
              </div>
              {card.length > 0 ? (
                <div className="flex justify-between mt-2">
                  <div className="text-xl px-1">
                    Цена: {card.reduce((acc, item) => acc + +item.cost, 0)}
                    .00p
                  </div>
                  {isLoggedIn && (
                    <button className="px-16 py-2 bg-neutral-100 rounded-lg hover:bg-neutral-300 duration-500">
                      Купить
                    </button>
                  )}
                </div>
              ) : (
                <div className="text-lg opacity-50 font-semibold absolute top-3 left-[40%] select-none">
                  {" "}
                  Корзина пуста
                </div>
              )}
            </div>
          ) : (
            ""
          )}
          {isLoggedIn ? (
            <button
              className="font-light text-2xl hover:bg-neutral-300 px-4 py-2 rounded-xl duration-500  hover:text-blue-400"
              onClick={handleLogout}>
              LOG OUT
            </button>
          ) : (
            <button
              className="font-light text-2xl hover:bg-neutral-300 px-4 py-2 rounded-xl duration-500  hover:text-blue-400 "
              onClick={handleSignUpClick}>
              SIGN UP
            </button>
          )}
        </div>
      </div>
      {showLogin && !isLoggedIn && (

        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50 backdrop-blur-md">
          <div className="bg-white rounded-lg p-8">
            <div className="flex justify-center">
              <h2 className="text-2xl mb-2 px-20">Вход</h2>
            </div>
            <div className="mb-4">
              <label htmlFor="login" className="block mb-2">
                Логин:
              </label>
              <input
                type="text"
                id="login"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2">
                Пароль:
              </label>
              <input
                type="password"
                id="password"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex gap-3">
              <button
                className="px-16 py-2 bg-neutral-100 rounded-lg hover:bg-neutral-300 duration-500"
                onClick={handleLogin}>
                Войти
              </button>
              <button
                className="px-16 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 duration-500"
                onClick={closeModal}>
                Отмена
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


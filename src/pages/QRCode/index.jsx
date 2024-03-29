import React from "react";

import { Button, Img, Input, Line, Text } from "components";

import { CloseSVG } from "../../assets/images";

const QRCodePage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white-A700 flex flex-row items-center justify-center p-6 sm:px-5 shadow-bs1 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[90%]">
              <Img
                className="h-[35px] w-[13%]"
                src="images/img_group_5.svg"
                alt="Group"
              />
              <Input
                name="InputField"
                placeholder="Search"
                value={inputfieldvalue}
                onChange={(e) => setInputfieldvalue(e)}
                className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium p-0 text-base text-left w-full"
                wrapClassName="border border-blue_gray-300 border-solid flex md:ml-[0] ml-[52px] w-2/5 md:w-full"
                prefix={
                  <Img
                    className="cursor-pointer h-5 my-4 mx-3"
                    src="images/img_search_black_900.svg"
                    alt="search"
                  />
                }
                suffix={
                  <CloseSVG
                    fillColor="#bac1ce"
                    className="cursor-pointer h-5 my-auto"
                    onClick={() => setInputfieldvalue("")}
                    style={{
                      visibility:
                        inputfieldvalue?.length <= 0 ? "hidden" : "visible",
                    }}
                    height={20}
                    width={20}
                    viewBox="0 0 20 20"
                  />
                }
                shape="round"
              ></Input>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-center md:ml-[0] ml-[50px] w-[33%] md:w-full">
                <div className="flex flex-row gap-[19px] items-center justify-between pl-[5px] py-[5px] w-[27%] sm:w-full">
                  <Text
                    className="ml-[9px] text-base text-gray-900"
                    size="txtGilroyMedium16"
                  >
                    Orders
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown_gray_900.svg"
                    alt="arrowdown"
                  />
                </div>
                <Text
                  className="sm:ml-[0] ml-[51px] sm:mt-0 mt-[11px] text-base text-gray-900"
                  size="txtGilroyMedium16"
                >
                  Categories
                </Text>
                <div className="flex flex-row gap-[26px] items-center justify-between sm:ml-[0] ml-[51px] pl-[5px] py-[5px] w-[27%] sm:w-full">
                  <Text
                    className="ml-4 text-base text-gray-900"
                    size="txtGilroyMedium16"
                  >
                    More
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown_gray_900.svg"
                    alt="arrowdown One"
                  />
                </div>
              </div>
              <Img
                className="h-[26px] md:ml-[0] ml-[66px] w-[2%]"
                src="images/img_cart.svg"
                alt="cart"
              />
            </div>
          </div>
        </header>
        <div className="flex md:flex-col flex-row gap-[46px] items-start justify-start max-w-[1292px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col items-center justify-end w-[66%] md:w-full">
            <div className="bg-white-A700 flex flex-col md:gap-10 gap-[70px] items-center justify-start p-4 rounded-lg shadow-bs w-full">
              <div className="flex flex-col gap-[23px] items-start justify-start w-[97%] md:w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900_02 sm:text-xl"
                    size="txtGilroyMedium24"
                  >
                    Order Summary
                  </Text>
                  <Line className="bg-blue_gray-100 h-px w-full" />
                </div>
                <div className="flex md:flex-col flex-row gap-4 items-center justify-start pt-1.5 w-[77%] md:w-full">
                  <Img
                    className="h-[194px] md:h-auto object-cover rounded w-[194px]"
                    src="images/img_pngwing1.png"
                    alt="pngwingOne"
                  />
                  <div className="flex flex-col items-start justify-start w-[66%] md:w-full">
                    <Text
                      className="text-black-900_02 text-xl"
                      size="txtGilroyMedium20"
                    >
                      Samsung Galaxy M12
                    </Text>
                    <Text
                      className="mt-[19px] text-blue_gray-400 text-lg"
                      size="txtGilroyMedium18"
                    >
                      (Blue,6GB RAM, 128GB Storage)
                    </Text>
                    <div className="flex flex-row items-center justify-start mt-[23px] w-[23%] md:w-full">
                      <Text
                        className="text-black-900_02 text-lg"
                        size="txtGilroyMedium18Black90002"
                      >
                        Color:
                      </Text>
                      <Text
                        className="ml-1 text-blue_gray-400 text-lg"
                        size="txtGilroyMedium18"
                      >
                        Blue
                      </Text>
                    </div>
                    <div className="flex flex-row font-opensans gap-[15px] items-end justify-start mt-[18px] w-[39%] md:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900_02 sm:text-xl"
                        size="txtOpenSansMedium24"
                      >
                        <span className="text-colors font-gilroy text-left font-semibold">
                          $
                        </span>
                        <span className="text-colors1 font-gilroy text-left font-semibold">
                          555.29
                        </span>
                      </Text>
                      <Text
                        className="line-through mt-[11px] text-base text-blue_gray-400"
                        size="txtOpenSansMedium16"
                      >
                        <span className="text-colors2 font-gilroy text-left font-semibold">
                          $6
                        </span>
                        <span className="text-colors2 font-gilroy text-left font-semibold">
                          55.99
                        </span>
                      </Text>
                    </div>
                    <div className="flex flex-row font-gilroy items-center justify-between mt-3 w-full">
                      <div className="flex flex-row items-center justify-evenly">
                        <Button
                          className="flex h-9 items-center justify-center rounded w-9"
                          shape="round"
                          color="blue_gray_100"
                          size="lg"
                          variant="outline"
                        >
                          <Img
                            className="h-4"
                            src="images/img_menu.svg"
                            alt="menu"
                          />
                        </Button>
                        <Button
                          className="cursor-pointer font-bold min-w-[64px] rounded text-center text-lg"
                          shape="round"
                          color="blue_gray_400"
                          size="lg"
                          variant="outline"
                        >
                          1
                        </Button>
                        <Button
                          className="flex h-9 items-center justify-center rounded w-9"
                          shape="round"
                          color="blue_gray_100"
                          size="lg"
                          variant="outline"
                        >
                          <Img
                            className="h-4"
                            src="images/img_plus_36X36.svg"
                            alt="plus"
                          />
                        </Button>
                      </div>
                      <Line className="bg-blue_gray-100 h-6 my-1.5 w-px" />
                      <Text
                        className="text-black-900_02 text-lg"
                        size="txtGilroyMedium18Black90002"
                      >
                        Save For Later
                      </Text>
                      <Line className="bg-blue_gray-100 h-6 my-1.5 w-px" />
                      <Text
                        className="text-lg text-red-700"
                        size="txtGilroyMedium18Red700"
                      >
                        Remove
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[23px] items-center justify-start mb-4 w-[97%] md:w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900_02 sm:text-xl"
                    size="txtGilroyMedium24"
                  >
                    Delivery Address
                  </Text>
                  <Line className="bg-blue_gray-100 h-px w-full" />
                </div>
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-start p-4 rounded w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between my-2 w-full">
                    <div className="flex sm:flex-1 sm:flex-col flex-row gap-6 items-start justify-between w-[67%] sm:w-full">
                      <Img
                        className="h-9 w-9"
                        src="images/img_radiobutton.svg"
                        alt="RadioButton"
                      />
                      <div className="flex flex-col gap-[22px] items-start justify-start pt-0.5">
                        <div className="flex flex-row gap-4 items-start justify-start w-[43%] md:w-full">
                          <Text
                            className="mt-[3px] text-black-900_02 text-xl"
                            size="txtGilroyMedium20"
                          >
                            Jone Cooper
                          </Text>
                          <Button
                            className="cursor-pointer font-medium leading-[normal] mb-0.5 min-w-[50px] rounded text-center text-sm"
                            shape="round"
                            color="blue_gray_100"
                            size="xs"
                          >
                            Work
                          </Button>
                        </div>
                        <Text
                          className="text-blue_gray-400 text-xl"
                          size="txtGilroyMedium20Bluegray400"
                        >
                          2118 Thornridge Cir. Syracuse, Connecticut 35624
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="sm:mt-0 mt-1 text-blue-A700 text-xl"
                      size="txtGilroyMedium20BlueA700"
                    >
                      Edit
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-start justify-start p-4 rounded w-full">
                  <div className="flex sm:flex-col flex-row gap-6 items-start justify-start my-2 w-[70%] md:w-full">
                    <Img
                      className="h-9 w-9"
                      src="images/img_search.svg"
                      alt="search"
                    />
                    <div className="flex flex-col gap-[22px] items-start justify-start pt-0.5 w-[89%] sm:w-full">
                      <div className="flex flex-row gap-4 items-start justify-start w-[42%] md:w-full">
                        <Text
                          className="mt-[3px] text-black-900_02 text-xl"
                          size="txtGilroyMedium20"
                        >
                          Jone Cooper
                        </Text>
                        <Button
                          className="cursor-pointer font-medium leading-[normal] mb-0.5 min-w-[54px] rounded text-center text-sm"
                          shape="round"
                          color="blue_gray_100"
                          size="xs"
                        >
                          Home
                        </Button>
                      </div>
                      <Text
                        className="text-black-900_02 text-xl"
                        size="txtGilroyMedium20"
                      >
                        4517 Washington Ave. Manchester, Kentucky 39495
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-start justify-start p-4 rounded w-full">
                  <div className="flex sm:flex-col flex-row gap-6 items-start justify-start my-2 w-[62%] md:w-full">
                    <Img
                      className="h-9 w-9"
                      src="images/img_search.svg"
                      alt="search One"
                    />
                    <div className="flex flex-col gap-[21px] items-start justify-end pt-[5px] w-[88%] sm:w-full">
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-black-900_02 text-xl"
                          size="txtGilroyMedium20"
                        >
                          Jone Cooper
                        </Text>
                      </div>
                      <Text
                        className="text-black-900_02 text-xl"
                        size="txtGilroyMedium20"
                      >
                        4140 Parker Rd. Allentown, New Mexico 31134
                      </Text>
                    </div>
                  </div>
                </div>
                <Input
                  name="Frame9986"
                  placeholder="Add Address"
                  className="!placeholder:text-black-900_02 !text-black-900_02 font-medium p-0 text-left text-xl w-full"
                  wrapClassName="border border-blue_gray-100 border-solid flex rounded w-full"
                  prefix={
                    <Img
                      className="h-9 ml-4 mr-6 my-6"
                      src="images/img_plus.svg"
                      alt="plus"
                    />
                  }
                  shape="round"
                  size="xl"
                ></Input>
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col gap-8 items-center justify-start md:mt-0 mt-[66px] w-[31%] md:w-full">
            <div className="flex flex-col gap-[33px] items-center justify-start w-full">
              <Img
                className="h-[200px] md:h-auto object-cover w-[200px]"
                src="images/img_image79.png"
                alt="imageSeventyNine"
              />
              <div className="flex flex-col gap-2 items-center justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                  size="txtGilroySemiBold24Bluegray900"
                >
                  Lorem ipsum
                </Text>
                <Text
                  className="leading-[26.00px] text-base text-blue_gray-400 text-center w-full"
                  size="txtGilroyMedium16Bluegray400"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                  sociis quam nascetur felis in enim. Praesent id vel nisi,
                  adipiscing scelerisque.
                </Text>
              </div>
            </div>
            <Button
              className="cursor-pointer font-medium text-base text-center w-[396px]"
              shape="round"
              size="lg"
            >
              Copy Code
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default QRCodePage;

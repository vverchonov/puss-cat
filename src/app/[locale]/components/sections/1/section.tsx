import { useTranslations } from "next-intl";
import { Links } from "../../common/links";
import { Wrapper } from "../../common/wrappers/wrapper";
import { RegularText } from "../../common/text/regular-text";

export const SectionOne = (props: any) => {
  const t = useTranslations("SectionOne");
  return (
    <>
      <div className="min-h-screen w-full">
        <Links />
        <Wrapper>
          <RegularText
            customClass={"text-center"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
          />
        </Wrapper>
      </div>
    </>
  );
};

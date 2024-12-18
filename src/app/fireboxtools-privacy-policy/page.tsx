import { SCREENS } from "@ft/common/enums/screens";
import { PrivacyPolicy } from "@ft/components/PrivacyPolicy/PrivacyPolicy";
import { ToolKeys } from "@ft/components/tools/ToolsList/ToolKeys";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = generateMetaTags(ToolKeys.JSON_EXAMPLES, {
  title: "Privacy Policy | FireboxTools : Data Protection Guarantee",
  description:
    "Privacy Policy that outlines our commitment to safeguarding your personal data. Trust us to prioritize the confidentiality and protection of sensitive data.",
  link: SCREENS.PRIVACY_POLICY,
});

function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}

export default PrivacyPolicyPage;

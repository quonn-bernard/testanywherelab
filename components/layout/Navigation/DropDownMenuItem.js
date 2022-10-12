import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Text
  } from '@chakra-ui/react'
  import { ChevronDownIcon } from '@chakra-ui/icons';
  import Link from "next/link";

const DropDownMenuItem = () => {
  return (
    <Menu onClick={() => router.push(`/services`)}>
      <MenuButton p={0} m={0} as={Button} variant={""} rightIcon={<ChevronDownIcon />} >
        SERVICES
      </MenuButton>
      <MenuList>
      <MenuItem><Link pt={2} href="/services" ><Text>All Services</Text></Link></MenuItem>
      <MenuItem><Link pt={2} href="/categories/routine-labs" ><Text>Routine Labs</Text></Link></MenuItem>
      <MenuItem><Link pt={2} href="/categories/infectious-disease" replace={true}><Text>{`Infectious Disease`}</Text></Link></MenuItem>
      <MenuItem><Link pt={2} href="/categories/diabetes-screening" replace={true}><Text>{`Diabetes Screening`}</Text></Link></MenuItem>
      <MenuItem><Link pt={2} href="/categories/clotting-screening" replace={true}><Text>{`Clotting Screening`}</Text></Link></MenuItem>
      <MenuItem><Link pt={2} href="/categories/urine-based-testing" replace={true}><Text>{`Urine Based Testing`}</Text></Link></MenuItem>
      <MenuItem><Link pt={2} href="/categories/job-onboarding" replace={true}><Text>{`Job Onboarding Tests`}</Text></Link></MenuItem>
      <MenuItem><Link pt={2} href="/categories/womens-health" replace={true}><Text>{`Women's Health`}</Text></Link></MenuItem>
      <MenuItem><Link pt={2} href="/categories/immunizations" replace={true}><Text>{`Immunizations`}</Text></Link></MenuItem>
      <MenuItem><Link pt={2} href="/categories/test-bundles" replace={true}><Text>{`Test Bundles`}</Text></Link></MenuItem>
      </MenuList>
    </Menu>
  );
};

export default DropDownMenuItem;

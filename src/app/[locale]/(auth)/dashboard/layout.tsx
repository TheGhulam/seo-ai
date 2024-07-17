import { LogOutButton } from '@/components/LogOutButton';
import { BaseTemplate } from '@/templates/BaseTemplate';

export default function DashboardLayout(props: { children: React.ReactNode }) {
  return (
    <BaseTemplate
      rightNav={
        <>
          <li>
            <LogOutButton />
          </li>

          {/* <li>
            <LocaleSwitcher />
          </li> */}
        </>
      }
    >
      {props.children}
    </BaseTemplate>
  );
}

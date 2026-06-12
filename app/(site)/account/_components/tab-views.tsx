import AccountSettingsContent from "./account-settings-content";
import { OrdersTabContent } from "./orders-tab-content";

export function OrdersTab() {
  return <OrdersTabContent />
}

export function ReturnsTab() {
  return <div>Returns content here</div>;
}

export function MessagesTab() {
  return <div>Messages content here</div>;
}

export function AddressesTab() {
  return <div>Addresses content here</div>;
}

export function AccountSettingsTab() {
  return <AccountSettingsContent />
}

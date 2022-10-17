import LayoutDeafault from '../_common/deafault';
import AuthProvider from '../_context/AuthProvider';
import MainHome from '../_view/home';

export default function Home() {
  return (
    <AuthProvider>
      <LayoutDeafault>
        <MainHome />
      </LayoutDeafault>
    </AuthProvider>
  );
}

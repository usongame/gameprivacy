import { Link, Outlet } from 'umi';
import styles from './index.less';

export default function Layout() {
  return (
    <div className={styles.navs}>
      <ul>
        <li>
          <Link to="/">隐私政策</Link>
        </li>
        <li>
          <Link to="/agreement">用户协议</Link>
        </li>
        <li>
          <Link to="/children">儿童隐私协议</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

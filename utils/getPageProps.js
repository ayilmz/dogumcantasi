export const getPageProps = ctx => {
  let isTablet = false;
  const userAgent = ctx?.req?.headers['user-agent'];

  const isMobile = userAgent?.indexOf('Mobile') > -1;
  const isAndroid = userAgent?.indexOf('Android') > -1;
  const isiOS = userAgent?.indexOf('iPhone') > -1 || userAgent?.indexOf('iPad') > -1;

  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(userAgent)) {
    isTablet = true;
  }
  return { isMobile, isTablet, isAndroid, isiOS };
};

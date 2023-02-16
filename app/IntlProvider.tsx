import React, { useState, useEffect, createContext, useContext } from 'react';
import {
  createIntl,
  createIntlCache,
  RawIntlProvider,
  IntlConfig,
} from 'react-intl';

type localeType = IntlConfig['locale'];
type messagesType = IntlConfig['messages'];

interface ContextProps {
  setLocale: (locale: localeType) => void;
  locale: localeType;
  messages: { [key: string]: messagesType };
}

const LocaleContext = createContext<any>({});

export const useLocale = () => useContext<ContextProps>(LocaleContext);

const cache = createIntlCache();

const IntlProvider: React.FC<
  Pick<ContextProps, 'locale' | 'messages'> & { children?: React.ReactNode }
> = ({ children, locale, messages }) => {
  const [intl, setIntl] = useState(
    createIntl({ locale, messages: messages[locale] }, cache),
  );

  const setLocale = async (nextLocale: localeType) => {
    // only triggered by used in this case go and fetch new locale data
    // const nextMessages = await getMessages(nextLocale);
    setIntl(
      createIntl({ locale: nextLocale, messages: messages[locale] }, cache),
    );
    // cookie.set('locale', nextLocale, { expires: 365 });
  };

  useEffect(() => {
    setIntl(createIntl({ locale, messages: messages[locale] }, cache));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ setLocale }}>
      <RawIntlProvider value={intl}>{children}</RawIntlProvider>
    </LocaleContext.Provider>
  );
};
export default IntlProvider;

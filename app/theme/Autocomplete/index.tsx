/**
 *
 * Autocomplete
 *
 */
import { useState } from 'react';
import { InputProps } from 'theme/Input';

interface AutocompleteState {
  value?: string;
  isFocused?: boolean;
}

type AutocompleteProps = {
  initialState?: AutocompleteState;
  data?: any[];
  filterFunction?: (...args: any[]) => any[];
  filterKey?: string;
  onChange?: (...args: any[]) => any;
  onFocus?: (...args: any[]) => any;
  onBlur?: (...args: any[]) => any;
};

interface AutocompleteOutput extends AutocompleteState {
  inputProps: InputProps;
  data: any[];
  clear: () => void;
  blur: () => void;
  focus: () => void;
}

function filterByKey({
  data,
  key,
  value,
}: {
  data: any[];
  key: string;
  value: string;
}) {
  return (data || []).reduce((list, item) => {
    if (item[key] && item[key].toLowerCase().includes(value.toLowerCase())) {
      list.push(item);
    }
    return list;
  }, []);
}

const useAutocomplete = (props: AutocompleteProps): AutocompleteOutput => {
  const [state, set] = useState<AutocompleteState>({
    value: props.initialState?.value || '',
    isFocused: props.initialState?.isFocused,
  });
  const setState = (s: Partial<AutocompleteState>) => set({ ...state, ...s });

  let data = props.data || [];

  if (props.filterKey && props.data) {
    data = filterByKey({
      data: props.data!,
      key: props.filterKey,
      value: state.value || '',
    });
  }

  if (props.filterFunction) {
    data = props.filterFunction({
      data: props.data,
      value: state.value,
    });
  }

  return {
    inputProps: {
      onChangeText: (val) => setState({ value: val }),
      value: state.value,
      onFocus: () => setState({ isFocused: true }),
      onBlur: () => setState({ isFocused: false }),
      autoCorrect: false,
    },
    data,
    clear: () => setState({ isFocused: false, value: '' }),
    blur: () => setState({ isFocused: false }),
    focus: () => setState({ isFocused: true }),
    ...state,
  };
};

export default useAutocomplete;

import React, { useCallback, useState } from 'react';
import { Appbar, Searchbar, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StackHeaderProps } from '@react-navigation/stack';

import { useSearch } from '../../hooks/search';

interface HeaderProps extends StackHeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = props => {
  const [searchBarActive, setSearchBarActive] = useState(false);
  const { query, setQuery } = useSearch();

  const { goBack } = useNavigation();
  const { colors } = useTheme();
  const { previous, title } = props;

  const handleIconPress = useCallback(() => {
    setQuery('');
    setSearchBarActive(false);
  }, [setQuery]);

  const styles = {
    container: {
      backgroundColor: colors.primary,
    },
    input: {
      backgroundColor: colors.primary,
      color: colors.surface,
      borderBottomWidth: 1,
      borderBottomColor: colors.surface,
    },
  };

  return (
    <Appbar.Header>
      {searchBarActive ? (
        <Searchbar
          onIconPress={handleIconPress}
          icon="arrow-left"
          iconColor={colors.text}
          inputStyle={styles.input}
          style={styles.container}
          theme={{
            colors: {
              primary: colors.accent,
              accent: colors.primary,
              placeholder: colors.placeholder,
            },
          }}
          placeholder="Procurar por nome..."
          value={query}
          onChangeText={text => setQuery(text)}
        />
      ) : (
        <>
          {previous && <Appbar.BackAction onPress={() => goBack()} />}
          <Appbar.Content title={title} />
          <Appbar.Action
            icon="magnify"
            color={colors.text}
            onPress={() => setSearchBarActive(true)}
          />
        </>
      )}
    </Appbar.Header>
  );
};

export default Header;

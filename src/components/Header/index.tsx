import React, { useCallback, useState } from 'react';
import { Appbar, Searchbar } from 'react-native-paper';
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
  const { previous, title } = props;

  const handleIconPress = useCallback(() => {
    setQuery('');
    setSearchBarActive(false);
  }, [setQuery]);

  return (
    <Appbar.Header>
      {searchBarActive ? (
        <Searchbar
          onIconPress={handleIconPress}
          icon="arrow-left"
          iconColor="#fff"
          inputStyle={styles.input}
          style={styles.container}
          theme={{
            colors: {
              primary: '#6f4fa2',
              accent: '#000',
              placeholder: '#ffffff40',
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
            color="#fff"
            onPress={() => setSearchBarActive(true)}
          />
        </>
      )}
    </Appbar.Header>
  );
};

const styles = {
  container: {
    backgroundColor: '#000',
  },
  input: {
    backgroundColor: '#000',
    color: '#ffffff73',
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff73',
  },
};

export default Header;

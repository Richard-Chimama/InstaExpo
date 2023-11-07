import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../ReduxStore';
import * as S from './styled';

interface TextProps {
  text?: string;
}

const PostText: React.FC<TextProps> = ({ text }) => {
  const [isReadMore, setIsReadMore] = useState(false);
  const [postText, setPostText] = useState('');

  const Theme = useSelector((state: RootState) => state.theme);

  useEffect(() => {
    if (text) {
      if (text.length > 5) {
        if (isReadMore) {
          setPostText(text);
        } else {
          setPostText(text.slice(0, 50));
        }
      } else {
        setPostText(text);
      }
    }
  }, [text, isReadMore]);

  return (
    <S.Container>
      <S.PostText mode={Theme.isDark}>{postText}</S.PostText>
      {text && text.length > 50 && (
        <TouchableOpacity onPress={() => setIsReadMore(!isReadMore)}>
          <S.OptionRead mode={Theme.isDark}>
            {isReadMore ? 'Read less' : 'Read more'}
          </S.OptionRead>
        </TouchableOpacity>
      )}
    </S.Container>
  );
};

export default PostText;

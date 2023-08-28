import * as S from './style'
import DeleteSvg from '../../../assets/icons/delete.svg'

interface IProps {
    onPress: (params: number) => void,
    onDelete: () => void,
}

export const NumericKeypad = ({ onPress, onDelete }: IProps) => {

  const handlePress = (value: number) => {
    onPress(value);
  };

  return (
    <S.container>
      <S.div>
        <S.button onPress={() => handlePress(1)}>
          <S.text>1</S.text>
        </S.button>
        <S.button onPress={() => handlePress(2)}>
          <S.text>2</S.text>
        </S.button>
        <S.button onPress={() => handlePress(3)}>
          <S.text>3</S.text>
        </S.button>
      </S.div>
      <S.div>
        <S.button onPress={() => handlePress(4)}>
          <S.text>4</S.text>
        </S.button>
        <S.button onPress={() => handlePress(5)}>
          <S.text>5</S.text>
        </S.button>
        <S.button onPress={() => handlePress(6)}>
          <S.text>6</S.text>
        </S.button>
      </S.div>
      <S.div>
        <S.button onPress={() => handlePress(7)}>
          <S.text>7</S.text>
        </S.button>
        <S.button onPress={() => handlePress(8)}>
          <S.text>8</S.text>
        </S.button>
        <S.button onPress={() => handlePress(9)}>
          <S.text>9</S.text>
        </S.button>
      </S.div>
      <S.div>
        <S.button>
        </S.button>
        <S.button onPress={() => handlePress(0)}>
          <S.text>0</S.text>
        </S.button>
        <S.button onPress={() => onDelete()}>
          <S.text>
            <DeleteSvg />
          </S.text>
        </S.button>
      </S.div>
    </S.container>
  );
};

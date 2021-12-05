import React, { useRef, useState } from 'react';
import { FlatList, Alert } from 'react-native';
import {
    BoxCategorias,
    BoxImagemReceita,
    BoxLogo,
    BoxReceitas,
    BoxTextInfo,
    ButtonReceitas,
    Container,
    ImagemReceita,
    Logo,
    TextButton,
    Categorias,
    TextInfo,
    Titulo,
    PaginaReceitas,
    BotaoFavorito,
    CartaoCategoria,
    TextCartao,
    TitleInfo,
} from './styles';
import {
    ConteudoReceita,
    TituloReceita,
    BannerReceita,
    Banner,
    TituloIngredientes,
    ListaIngredientes,
    ViewReceitas,
    TituloModoPreparo,
    ModoPreparo,
    BoxIngredientes,
    BoxModoPreparo,
} from '../Receitas/TelaReceitas/styles';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Modalize } from 'react-native-modalize';
import { Info } from '../Receitas/TelaReceitas/InfoReceitas';

export default function Receitas({ navigation }) {
    const modalizeRef = useRef(null);

    let [imagem, setImagem] = useState('');
    let [nome, setNome] = useState('');
    let [ingredientes, setIngredientes] = useState('');
    let [modoPreparo, setModoPreparo] = useState('');

    function alterarReceita(imagemReceita, nomeReceita, ingredientes, modoPreparo) {

        setImagem(imagemReceita);
        setNome(nomeReceita);
        setIngredientes(ingredientes);
        setModoPreparo(modoPreparo);

        modalizeRef.current?.open();

    }

    return (
        <Container >
            <Modalize
                ref={modalizeRef}
                snapPoint={800}
                modalHeight={800}
                withOverlay={true}
                scrollViewProps={{showsVerticalScrollIndicator:false}}
            >
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={Info}
                    keyExtractor={(item) => { item.uid }}
                    renderItem={({ item }) => (
                        <ViewReceitas>
                            <BannerReceita>
                                <Banner
                                    source={imagem}
                                    resizeMode="stretch"
                                />
                            </BannerReceita>

                            <ConteudoReceita>
                                <TituloReceita>
                                    {nome}
                                </TituloReceita>

                                <TituloIngredientes>
                                    Ingredientes
                                </TituloIngredientes>

                                <BoxIngredientes>
                                    <ListaIngredientes>
                                        {ingredientes}
                                    </ListaIngredientes>
                                </BoxIngredientes>

                                <TituloModoPreparo>
                                    Modo de Preparo
                                </TituloModoPreparo>

                                <BoxModoPreparo>
                                    <ModoPreparo>
                                        {modoPreparo}
                                    </ModoPreparo>
                                </BoxModoPreparo>
                            </ConteudoReceita>

                        </ViewReceitas>
                    )}
                />
            </Modalize>

            <BoxLogo>
                <Logo
                    source={require('../../../assets/imagens/logo.png')}
                />
                <ButtonReceitas>
                    <TextButton>Receitas</TextButton>
                </ButtonReceitas>
            </BoxLogo>

            <PaginaReceitas showsVerticalScrollIndicator={false}>
                <BoxCategorias>
                    <Titulo>Categorias</Titulo>
                    <Categorias horizontal={true} showsHorizontalScrollIndicator={false}>
                        <CartaoCategoria activeOpacity={0.8}>
                            <TextCartao>
                                Massas
                            </TextCartao>
                        </CartaoCategoria>
                        <CartaoCategoria activeOpacity={0.8}>
                            <TextCartao>
                                Sorvetes
                            </TextCartao>
                        </CartaoCategoria>
                        <CartaoCategoria activeOpacity={0.8}>
                            <TextCartao>
                                Sobremesas
                            </TextCartao>
                        </CartaoCategoria>
                        <CartaoCategoria activeOpacity={0.8}>
                            <TextCartao>
                                Bolos
                            </TextCartao>
                        </CartaoCategoria>
                        <CartaoCategoria activeOpacity={0.8}>
                            <TextCartao>
                                Hambúrgueres
                            </TextCartao>
                        </CartaoCategoria>
                        <CartaoCategoria activeOpacity={0.8}>
                            <TextCartao>
                                Bebidas
                            </TextCartao>
                        </CartaoCategoria>

                    </Categorias>
                </BoxCategorias>


                <FlatList
                    style={{ marginBottom: 35, marginTop: 10 }}
                    showsVerticalScrollIndicator={false}
                    data={dadosReceitas}
                    renderItem={({ item }) => (
                        <BoxReceitas
                            activeOpacity={0.8}
                            style={{ backgroundColor: item.uid % 2 == 0 ? '#FBF6E3' : '#FAB111' }}
                            onPress={() => alterarReceita(item.imagemReceita, item.nomeReceita, item.ingredientes, item.modoPreparo)}
                        >
                            <BoxImagemReceita>
                                <ImagemReceita
                                    source={item.imagemReceita}
                                />
                            </BoxImagemReceita>

                            <BoxTextInfo>
                                <TitleInfo>{item.nomeReceita}</TitleInfo>
                                <TextInfo><MaterialIcons name="category" size={15} color="black" />  {item.tipoReceita}</TextInfo>
                                <TextInfo>{item.iconeDificuldade}{'  '}{item.dificuldade}</TextInfo>
                                <TextInfo><FontAwesome5 name="hourglass-start" size={15} color="black" />  {item.tempoPreparo}</TextInfo>
                                <BotaoFavorito
                                    activeOpacity={0.7}
                                    onPress={() => { navigation.navigate('Perfil'), Alert.alert('Aviso', 'Acesse sua conta para marcar como favorito') }}
                                >
                                    <FontAwesome5 name="heart" size={22} color="#000" />
                                </BotaoFavorito>
                            </BoxTextInfo>
                        </BoxReceitas>
                    )}
                    keyExtractor={(item) => { item.uid }}
                />
            </PaginaReceitas>

        </Container>
    )
}

const dadosReceitas = [
    {
        uid: '1',
        nomeReceita: 'Pizza de Mussarela',
        tipoReceita: 'Massas',
        dificuldade: 'Médio',
        tempoPreparo: '45min',
        imagemReceita: require('../../../assets/imagens/foods/pizzaMussarela.jpg'),
        iconeDificuldade: <FontAwesome name="star-half-empty" size={15} color="black" />,
        ingredientes: '• 1 envelope de Fermento Biológico Seco (10g)\n• 2 xícaras (chá) de água\n• 1kg de Farinha de Trigo\n• 2 colheres (chá) de sal\n• 2 colheres (sopa) de açúcar\n• ¼ xícara (chá) de óleo\n\nCobertura\n\n• 1 xícara (chá) de molho de tomate\n• Queijo muçarela ralado a gosto\n• Orégano e azeite de oliva a gosto',
        modoPreparo: 'Em um recipiente, junte o Fermento com 1 xícara (chá) de água e ½ xícara (chá) de farinha\n\nMisture bem para dissolver o fermento.\n\nAdicione o restante da água, o sal, o açúcar e o óleo.\n\nAos poucos, acrescente o restante da farinha e sove bem até a massa ficar lisa e homogênea.\n\nCubra e deixe crescer até dobrar de volume.\n\nSove novamente, divida a massa em 6 porções e forme bolas.\n\nCubra e deixe descansar por mais 30 minutos.\n\nAbra cada porção no formato de um disco, coloque em assadeiras redondas e espalhe um pouco de molho de tomate.\n\nAsse em forno médio (180ºC), preaquecido, por 15 minutos, ou até as bordas dourarem levemente.\n\nRetire do forno, espalhe mais um pouco de molho de tomate, polvilhe a muçarela e o orégano, e regue com o azeite.\n\nVolte ao forno por mais 15 minutos, ou até derreter o queijo.\n\nSirva quente.',
    },
    {
        uid: '2',
        nomeReceita: 'Salada de Frutas',
        tipoReceita: 'Saladas',
        dificuldade: 'Fácil',
        tempoPreparo: '30min',
        imagemReceita: require('../../../assets/imagens/foods/saladaFrutas.jpg'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />,
        ingredientes: '• 1 lata de leite condensado\n• 1 lata de creme de leite\n• 1 medida da lata de suco de laranja (use a lata de leite condensado vazia para medir)\n• frutas de sua preferência (abacaxi, banana, manga, melão, morango, mamão, maçã, pera, uva, entre outras)',
        modoPreparo: 'Em uma tigela, misture o leite condensado, o creme de leite e o suco de laranja. Reserve.\n\nPique as frutas de sua preferência e coloque-as em uma tigela.\n\nAdicione o creme reservado e leve à geladeira por, no mínimo, 1 hora.\n\nSirva gelada.'
    },
    {
        uid: '3',
        nomeReceita: 'Lasanha',
        tipoReceita: 'Massas',
        dificuldade: 'Médio',
        tempoPreparo: '50min',
        imagemReceita: require('../../../assets/imagens/foods/lasanha.jpg'),
        iconeDificuldade: <FontAwesome name="star-half-empty" size={15} color="black" />,
        ingredientes: '• 500 g de massa de lasanha\n• 500 g de carne moída\n• 2 caixas de creme de leite\n• 3 colheres de manteiga\n• 3 colheres de farinha de trigo\n• 500 g de presunto\n• 500 g de mussarela\n• sal a gosto\n• 2 copos de leite\n• 1 cebola ralada\n• 3 colheres de óleo\n• 1 caixa de molho de tomate\n• 3 dentes de alho amassados\n• 1 pacote de queijo ralado',
        modoPreparo: 'Cozinhe a massa segundo as orientações do fabricante, despeje em um refratário com água gelada para não grudar e reserve.\n\n• Molho à bolonhesa\nRefogue o alho, a cebola, a carne moída, o molho de tomate, deixe cozinhar por 3 minutos e reserve.\n\n• Molho branco\nDerreta a margarina, coloque as 3 colheres de farinha de trigo e mexa.\n\nDespeje o leite aos poucos e continue mexendo.\n\nPor último, coloque o creme de leite, mexa por 1 minuto e desligue o fogo.\n\n• Montagem\nDespeje uma parte do molho à bolonhesa em um refratário, a metade da massa, a metade do presunto, a metade da mussarela, todo o molho branco e o restante da massa.\n\nRepita as camadas até a borda do recipiente.\n\nFinalize com o queijo ralado e leve ao forno alto (220° C), pré-aquecido, por cerca de 20 minutos.',

    },
    {
        uid: '4',
        nomeReceita: 'X-Burguer',
        tipoReceita: 'Hambúrgueres',
        dificuldade: 'Fácil',
        tempoPreparo: '15min',
        imagemReceita: require('../../../assets/imagens/foods/x-burger.jpeg'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />,
        ingredientes: '• 2 hambúrgueres\n• Óleo para fritar\n• 2 fatias de mussarela\n• 2 pães para hambúrguer\n• Maionese\n• 2 rodelas de tomate\n• 2 folhas de alface',
        modoPreparo: 'Frite os hambúrgueres com um pouquinho de óleo , quando estiver frito cubra com a mussarela.\n\nRetire do fogo e coloque no pão.\n\nPasse no pão a maionese e coloque o alface e tomate.'
    },
    {
        uid: '5',
        nomeReceita: 'Waffles',
        tipoReceita: 'Massas',
        dificuldade: 'Fácil',
        tempoPreparo: '20min',
        imagemReceita: require('../../../assets/imagens/foods/waffles.jpeg'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />,
        ingredientes: '• 2 ovos\n• ½ xícara de óleo\n• 1 e 1/3 xícaras de leite\n• 1 colherinha de canela em pó\n• ½ xícara de açúcar\n• 1 colherinha de fermento em pó\n• 2 xícaras de farinha de trigo',
        modoPreparo: 'No liquidificador, bata os ovos, o óleo, o leite, a canela e o açúcar.\n\nSempre batendo, acrescente o fermento e a farinha de trigo aos poucos, até ficar uma massinha cremosa.\n\nApós, coloque-a na chapa do aparelho de waffles (bem quente e untada com óleo para não queimar).\n\nFeche o aparelho e deixe o waffler ficar douradinho.\n\nSirva com mel ou marmelada (geleia).'

    },
    {
        uid: '6',
        nomeReceita: 'Macarrão com Molho Vermelho',
        tipoReceita: 'Massas',
        dificuldade: 'Fácil',
        tempoPreparo: '20min',
        imagemReceita: require('../../../assets/imagens/foods/macarrao.jpeg'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />,
        ingredientes: '• ½ massa de macarrão\n• uma embalagem de extrato de tomate\n• molho de tomate\n• 500 ml de água\n• sal a gosto',
        modoPreparo: 'Coloque a água no fogo alto e espere ferver, depois adicione o sal a gosto de modo que a água fique salgada.\n\nAdicione o macarrão e espere entre 8 a 10 minutos, despeje a água do macarrão e coloque em uma vasilha.\n\nUtilize outra panela e preaqueça, adicione o óleo e espere esquentar.\n\nAdicione o extrato de tomate e o molho de tomate, aguarde o caldo engrossar e sirva.'

    },
    {
        uid: '7',
        nomeReceita: 'Cookies',
        tipoReceita: 'Sobremesas',
        dificuldade: 'Médio',
        tempoPreparo: '30min',
        imagemReceita: require('../../../assets/imagens/foods/cookies.jpeg'),
        iconeDificuldade: <FontAwesome name="star-half-empty" size={15} color="black" />,
        ingredientes: '• 4 xícaras de farinha de trigo\n• 1 colher de chá de fermento em pó\n• 1 colher de chá de sal\n• 1 e 1/2 xícara de chá de manteiga (preferencialmente) s/ sal derretida ou margarina (aprox. 275 grs. )\n• 2 xícaras de açúcar mascavo escuro\n• 1 xícara de açúcar branco\n• 2 colheres de sopa de essência de baunilha\n• 2 ovos inteiros\n• 2 gemas\n• 2 xícaras de chocolate ao leite picado em quadradinhos(aprox. 2 barras de 180 grs) (não use gotas, elas são duras)\n• ½ xícara de aveia em flocos grossos',
        modoPreparo: 'Reserve alguns pedacinhos de chocolate picado e da aveia, para enfeitar o cookie antes de assar.\n\nEm uma tigela grande, coloque os açúcares, os ovos inteiros, as duas gemas e a baunilha.\n\nMisture bem.\n\nDerreta a manteiga e acrescente na mistura de açúcar e ovos.\n\nMexa bem, até ficar homogêneo.\n\nPeneire sobre a mistura a farinha juntamente com o sal e o fermento.\n\nJunte a aveia e o chocolate picado.\n\nMisture, tampe e leve à geladeira por no mínimo 3 horas, pois a massa deve ficar bem dura.\n\nVocê pode fazer na noite anterior e assar pela manhã.\n\nNão guarde a massa mais do que 1 dia na geladeira, pode estragar.\n\nDepois de bem dura, unte 2 formas grandes com manteiga e farinha, faça bolas de 4 a 5 cm de diâmetro e dê uma leve pressionada nela, para fica mais num formato de disco, não de bola.\n\nDeixe um espaço de 2 dedos de distância entre um cookie do outro.\n\nColoque 2 a 3 quadradinhos de chocolate em cima e salpique com os flocos de aveia pra decorar.\n\nRende de 28 a 32 cookies grandes.\n\nAsse em forno pré aquecido 190 graus por 12-13 minutos apenas.\n\nVão parecer que não estão prontos mas confie, estarão prontos.\n\nAos poucos vc descobrirá o ponto exato do cookie, pois a diferença de calor dos fornos pode influenciar.\n\nDeixe amornar, pois o cozimento ainda continua depois de tirado do forno.\n\nPor fora ele fica levemente crocante e dentro macio e com chocolate derretido.\n\nDesfrute com um cafezinho ou leite puro gelado!',
    },
    {
        uid: '8',
        nomeReceita: 'Baião de Dois',
        tipoReceita: 'Cozidos',
        dificuldade: 'Médio',
        tempoPreparo: '40min',
        imagemReceita: require('../../../assets/imagens/foods/baiaoDois.jpg'),
        iconeDificuldade: <FontAwesome name="star-half-empty" size={15} color="black" />,
        ingredientes: '• ½ kg de feijão verde\n• 1 paio cortado em rodelas\n• 2 tabletes de caldo de carne\n• 1 cebola ralada\n• 1 dente de alho amassado\n• 3 colheres (sopa) de óleo\n• ½ colher (sopa) de coento picado\n• 2 xícaras e 1/2 (chá) de arroz lavado e escorrido\n• 150 g de queijo de coalho cortado em fatias finas',
        modoPreparo: 'Deixe o feijão de molho de véspera. No dia seguinte cozinhe-o juntamente com o caldo de carne e 2,5 litros de água fria.\n\nTampe a panela e deixe cozinhar em fogo baixo por aproximadamente 1 hora.\n\nEm outra panela doure o paio, a cebola e o alho, no óleo. Junte o coento e o arroz e refogue bem. Acrescente o feijão já cozido, juntamente com o caldo. Misture bem, tampe a panela e deixe cozinhar até que o arroz fique cozido, úmido e com consistência cremosa.\n\nCubra o arroz com as fatias de queijo. Tampe a panela novamente e deixe que o vapor derreta o queijo.\n\nSirva acompanhado de carne-de-sol frita ou assada.',
    },
    {
        uid: '9',
        nomeReceita: 'Bolo de Chocolate',
        tipoReceita: 'Bolos',
        dificuldade: 'Médio',
        tempoPreparo: '40min',
        imagemReceita: require('../../../assets/imagens/foods/boloChocolate.jpg'),
        iconeDificuldade: <FontAwesome name="star-half-empty" size={15} color="black" />,
        ingredientes: '• 4 ovos\n• 4 colheres (sopa) de chocolate em pó\n• 2 colheres (sopa) de manteiga\n• 3 xícaras (chá) de farinha de trigo\n• 2 xícaras (chá) de açúcar\n• 2 colheres (sopa)de fermento\n• 1 xícara (chá) de leite',
        modoPreparo: 'Em um liquidificador adicione os ovos, o chocolate em pó, a manteiga, a farinha de trigo, o açúcar e o leite, depois bata por 5 minutos.\n\nAdicione o fermento e misture com uma espátula delicadamente.\n\nEm uma forma untada, despeje a massa e asse em forno médio (180 ºC) preaquecido por cerca de 40 minutos. Não se esqueça de usar uma forma alta para essa receita: como leva duas colheres de fermento, ela cresce bastante! Outra solução pode ser colocar apenas uma colher de fermento e manter a sua receita em uma forma pequena.'
    },
    {
        uid: '10',
        nomeReceita: 'Brigadeiro',
        tipoReceita: 'Sobremesas',
        dificuldade: 'Fácil',
        tempoPreparo: '25min',
        imagemReceita: require('../../../assets/imagens/foods/brigadeiro.jpg'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />,
        ingredientes: '• 1 caixa de leite condensado\n• 1 colher (sopa) de margarina sem sal\n• 7 colheres (sopa) de achocolatado ou 4 colheres (sopa) de chocolate em pó\n• chocolate granulado',
        modoPreparo: 'Em uma panela funda, acrescente o leite condensado, a margarina e o chocolate em pó.\n\nCozinhe em fogo médio e mexa até que o brigadeiro comece a desgrudar da panela.\n\nDeixe esfriar e faça pequenas bolas com a mão passando a massa no chocolate granulado.',
    },
    {
        uid: '11',
        nomeReceita: 'Carne de Panela',
        tipoReceita: 'Cozidos',
        dificuldade: 'Médio',
        tempoPreparo: '50min',
        imagemReceita: require('../../../assets/imagens/foods/carnePanela.jpg'),
        iconeDificuldade: <FontAwesome name="star-half-empty" size={15} color="black" />,
        ingredientes: '• 500 g de colchão mole cortado em bifes\n• 1 cebola ralado\n• 1 dente de alho amassado\n• ½ xícara chá de óleo\n• sal e pimenta-do-reino a gosto\n• 1 colher sopa de salsinha picada\n• 500 ml de água quente\n• 1/2 lata de massa de tomate\n• 1 pimentão verde picado\n• 1 tomate sem sementes picado\n• 1 cenoura pequena picada',
        modoPreparo: 'Em uma panela de pressão, coloque o óleo junte a cebola, alho e refogue bem.\n\nAcrescente a carne frite por 5 minutos mexendo bem, coloque o tomate, pimentão, massa de tomate, cenoura e a seguir acrescente a água.\n\nDeixe cozinhar por 30 minutos contando o inicio da fervura, assim que a carne estiver cozida retire do fogo, misture a salsinha e sirva em seguida.',
    },
    {
        uid: '12',
        nomeReceita: 'Coxinha de Frango',
        tipoReceita: 'Frituras',
        dificuldade: 'Fácil',
        tempoPreparo: '10min',
        imagemReceita: require('../../../assets/imagens/foods/coxinhaFrango.jpg'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />,
        ingredientes: '• 2 copos de água\n• 1 copo de leite\n• 1 colher de margarina\n• 1 cubo de caldo de galinha\n• sal a gosto\n• 3 xícaras de trigo',
        modoPreparo: 'Coloque a água, o leite, a margarina, o caldo e o sal em uma panela e misture até ferver.\n\nAbaixe o fogo e acrescente o trigo de uma só vez.\n\nMexa até obter uma massa lisa e homogênea.\n\nRecheie da maneira que preferir.',
    },
    {
        uid: '13',
        nomeReceita: 'Feijão cozido',
        tipoReceita: 'Cozidos',
        dificuldade: 'Fácil',
        tempoPreparo: '20min',
        imagemReceita: require('../../../assets/imagens/foods/feijaoCozido.jpg'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />,
        ingredientes: '• Feijão (350g)\n• Alho (2 dentes)\n• Sal ( A gosto)\n• Bacon (A gosto)\n• Linguiça Defumada (A gosto)',
        modoPreparo: 'Em uma panela de pressão, coloque água até sua metade e deixe ela ferver.\n\nEm um recipiente separe o feijão, para não acabar cozinhando uma pedra junto.\n\nQuando a água estiver fervendo, coloque o feijão para cozinhar. Tampe a panela de pressão e espere por 13 minutos. \n\nPassado os 13 minutos, desligue o fogo e abra o pino da panela, para toda a pressão sair. \n\nEnquanto isso, pique o alho, ou amasse com um pouco de sal e corte a linguiça e o bacon.\n\nEm uma panela a parte, coloque o bacon para fritar, se precisar coloque azeite no processo. Espere dourar e adicione a linguiça e o alho.\n\nQuando tudo estiver já frito, adicione aos poucos o feijão cozido na mistura.\n\nVá colocando sal até o seu gosto.\n\nDeixe ferver por 5 minutos e já pode desligar e se servir.',
    },
    {
        uid: '14',
        nomeReceita: 'Feijoada',
        tipoReceita: 'Cozidos',
        dificuldade: 'Difícil',
        tempoPreparo: '140min',
        imagemReceita: require('../../../assets/imagens/foods/feijoada.jpg'),
        iconeDificuldade: <FontAwesome name="star" size={15} color="black" />,
        ingredientes: '• 1 Kg de feijão preto\n• 100 g de carne seca\n• 70 g de orelha de porco\n• 70 g de rabo de porco\n• 70 g de pé de porco\n• 100 g de costelinha de porco\n• 50 g de lombo de porco\n• 100 g de paio\n• 150 g de lingüiça portuguesa\n\nTempero:\n\n• 2 cebolas grandes picadinhas\n• 1 maço de cebolinha verde picadinha\n• 3 folhas de louro\n• 6 dentes de alho\n• Pimenta do reino a gosto\n• 1 ou 2 laranjas\n• 40ml de pinga\n• Sal se precisar',
        modoPreparo: 'Coloque as carnes de molho por 36 horas ou mais, vá trocando a água várias vezes, se for ambiente quente ou verão, coloque gelo por cima ou em camadas frias.\n\nColoque para cozinhar passo a passo: as carnes duras, em seguida as carnes moles.\n\nQuando estiver mole coloque o feijão, e retire as carnes.\n\nFinalmente tempere o feijão.',
    },
    {
        uid: '15',
        nomeReceita: 'Filé de Frango',
        tipoReceita: 'Assados',
        dificuldade: 'Fácil',
        tempoPreparo: '20min',
        imagemReceita: require('../../../assets/imagens/foods/fileFrango.jpg'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />,
        ingredientes: '• 500 g de filé de frango\n• 1 limão\n• Sal a gosto',
        modoPreparo: 'Tempere os filés com o limão e sal. Deixe descansar por um tempo para apurar.\n\nDistribua a margarina na frigideira e coloque os filés. Cerca de 4 minutos de cada lado.',
    },
    {
        uid: '16',
        nomeReceita: 'Frango a parmegiana',
        tipoReceita: 'Assados',
        dificuldade: 'Médio',
        tempoPreparo: '50min',
        imagemReceita: require('../../../assets/imagens/foods/frangoParmegiana.jpg'),
        iconeDificuldade: <FontAwesome name="star-half-empty" size={15} color="black" />,
        ingredientes: '• 6 filés de peito de frango\n• 2 dentes de alho\n• sal e pimenta-do-reino a gosto\n• 4 colheres de (sopa) de maionese\n• 2 xícaras de (chá) de farinha de rosca\n• 1 lata de molho de tomate\n• 200 g de mussarela\n• óleo o suficiente para untar',
        modoPreparo: 'Coloque os filés entre 2 filmes plásticos.\n\nBata suavemente com o martelo de carne para ficarem com a mesma espessura.\n\nTempere - os com o alho, o sal e a pimenta.\n\nPasse - os pela maionese e a farinha de rosca.\n\nColoque em uma assadeira untado com o óleo.\n\nLeve ao forno médio por uns 30 minutos.Retire do forno, cubra com a mussarela e o molho.\n\nLeve ao forno novamente só para gratinar.\n\nSirva em seguida acompanhado de arroz branco e batata palha.',
    },
    {
        uid: '17',
        nomeReceita: 'Fricasse de frango',
        tipoReceita: 'Assados',
        dificuldade: 'Fácil',
        tempoPreparo: '30min',
        imagemReceita: require('../../../assets/imagens/foods/fricasseFrango.jpg'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />,
        ingredientes: '• 1 lata de creme de leite\n• 1 lata de milho verde\n• 1 copo de requeijão cremoso\n• 100 g de azeitona sem caroço\n• 2 peitos de frango desfiados\n• 200 g de mussarela fatiada\n• 100 g de batata palha\n• 1 xícara de água\n• 1 pitada de sal',
        modoPreparo: 'Bata no liquidificador o milho, o requeijão, o creme de leite e a água.\n\nRefogue o creme do liquidificador com o frango desfiado, as azeitonas e o sal até ficar com uma textura espessa.\n\nColoque o refogado numa assadeira, cubra com mussarela e espalhe a batata palha por cima.\n\nLeve ao forno até borbulhar.\n\nSirva com arroz branco.',
    },
    {
        uid: '18',
        nomeReceita: 'Gelatina',
        tipoReceita: 'Sobremesas',
        dificuldade: 'Fácil',
        tempoPreparo: '10min',
        imagemReceita: require('../../../assets/imagens/foods/gelatina.jpg'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />,
        ingredientes: '• 1 envelope de gelatina em pó (o sabor que preferir)\n• 1 copo de água quente\n• 1 copo de água gelada\n• 1 tupperware médio',
        modoPreparo: 'Pegue um copo de água, coloque no micro-ondas por 1 minuto para esquentar a água, ou pode mesmo esquentá-la no fogão, fica a seu critério.\n\nPegue o tupperware médio e coloque todo o conteúdo da gelatina em pó nele e jogue a água quente por cima e mexa\n\nPosteriormente jogue também a água gelada e misture novamente.\n\nColoque na geladeira e pronto.',
    },
    {
        uid: '19',
        nomeReceita: 'Maionese tradicional',
        tipoReceita: 'Acompanhamentos',
        dificuldade: 'Fácil',
        tempoPreparo: '30min',
        imagemReceita: require('../../../assets/imagens/foods/maionese.jpg'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />,
        ingredientes: '• 6 batatas\n• 3 cenouras\n• 1 lata de milho\n• 1 lata de ervilha\n• Sal, pimenta e orégano a gosto\n• Suco de 2 limões\n• Azeite a gosto\n• 1 pote de maionese',
        modoPreparo: 'Lave a batata e a cenoura.\n\nLeve os para cozinhar.\n\nQuando cozido corte em cubinhos médios.\n\nEm uma travessa coloque os legumes picados, a lata de ervilha e milho.\n\nAdicione a quantidade de maionese que preferir.\n\nColoque em seguida o suco de limão.\n\nAcrescente sal e pimenta a gosto.\n\nDepois coloque na geladeira e espere esfriar para poder servir.',
    },
    {
        uid: '20',
        nomeReceita: 'Mousse de Chocolate',
        tipoReceita: 'Sobremesas',
        dificuldade: 'Médio',
        tempoPreparo: '50min',
        imagemReceita: require('../../../assets/imagens/foods/mousseChocolate.jpg'),
        iconeDificuldade: <FontAwesome name="star-half-empty" size={15} color="black" />,
        ingredientes: '• 1 lata de leite condensado\n• 1 colher (chá) de manteiga ou margarina\n• 1 lata de creme de leite gelado\n• 3 claras em neve\n• 4 colheres de achocolatado em pó',
        modoPreparo: 'Leve ao fogo o leite condensado, a manteiga e o achocolatado, mexendo sem parar até que a mistura solte do fundo da panela.\n\nReserve e deixa esfriar.\n\nMisture o creme de leite e as claras em neve até obter uma mistura homogênea.\n\nDespeje a massa em um refratário e leve ao congelador por aproximadamente 50 minutos.\n\nSirva bem gelado.',
    },
    {
        uid: '21',
        nomeReceita: 'Omelete',
        tipoReceita: 'Frituras',
        dificuldade: 'Fácil',
        tempoPreparo: '4min',
        imagemReceita: require('../../../assets/imagens/foods/omelete.jpeg'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />,
        ingredientes: '• 2 ovos\n• 1 pitada de sal\n• 1 fatia de presunto\n• 2 fatias de queijo\n• tempero verde a gosto\n• caldo de galinha a gosto',
        modoPreparo: 'Bata os 2 ovos, pode ser na batedeira ou não.\n\nApós ter batido bem, coloque-o na frigideira já untada com óleo, acrescente o sal, o presunto picado em quadradinhos e as duas fatias de queijo (não precisa picar o queijo).\n\nColoque os temperos a gosto, espere ficar firme, e vire o omelete.\n\nEstá pronto um omelete delicioso, bom apetite!',
    },
    {
        uid: '22',
        nomeReceita: 'Ovo frito',
        tipoReceita: 'Frituras',
        dificuldade: 'Fácil',
        tempoPreparo: '5min',
        imagemReceita: require('../../../assets/imagens/foods/ovoFrito.jpg'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />,
        ingredientes: '• Ovo\n• Sal a gosto\n• Pimenta do reino a gosto\n• Manteiga ou óleo ',
        modoPreparo: 'Em uma frigideira, coloque a manteiga ou óleo e deixa no fogo médio.\n\nQuando quente quebre o ovo na frigideira.\n\nEspere fritar, adicione a pimenta e cerca de 3 minutos estará pronto',
    },
    {
        uid: '23',
        nomeReceita: 'Pudim',
        tipoReceita: 'Sobremesas',
        dificuldade: 'Fácil',
        tempoPreparo: '60min',
        imagemReceita: require('../../../assets/imagens/foods/pudim.jpg'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />,
        ingredientes: '• 1 lata de leite condensado\n• 1 lata de leite (medida da lata de leite condensado)\n• 3 ovos inteiros\n\nCalda:\n\n• 1 xícara (chá) de açúcar\n• ½ xícara de água',
        modoPreparo: 'Primeiro, bata bem os ovos no liquidificador.\n\nAcrescente o leite condensado e o leite, e bata novamente.\n\n• Calda\n\nDerreta o açúcar na panela até ficar moreno, acrescente a água e deixe engrossar.\n\nColoque em uma forma redonda e despeje a massa do pudim por cima.\n\nAsse em forno médio por 45 minutos, com a assadeira redonda dentro de uma maior com água.\n\nEspete um garfo para ver se está bem assado.\n\nDeixe esfriar e desenforme.',
    },
    {
        uid: '24',
        nomeReceita: 'Risoto de camarão',
        tipoReceita: 'Cozidos',
        dificuldade: 'Médio',
        tempoPreparo: '45min',
        imagemReceita: require('../../../assets/imagens/foods/risotoCamarao.jpg'),
        iconeDificuldade: <FontAwesome name="star-half-empty" size={15} color="black" />,
        ingredientes: '• 3 xícaras de arroz arbóreo para risoto\n• 2 colheres de azeite\n• 1 colher de manteiga\n• 2 dentes de alho picados\n• 1 limão\n• ½ xícara de vinho branco\n• 400 g de camarão limpos e sem casca\n• 1 litro de água fervente ou mais\n• 1 caldo de camarão ou de peixe\n• sal e pimenta-do-reino a gosto\n• ½ lata de tomate pelados em cubo ou/ 1 tomate sem casca cortado em cubos\n• 2 colheres (sopa) de molho de tomate\n• salsinha ou coentro e cebolinha para temperar\n• 1 xícara de parmesão ralado',
        modoPreparo: 'Adicione em uma panela grande com tampa, o azeite, a manteiga, o alho e o arroz.\n\nMexa até que o arroz comece a ficar transparente para soltar o amido (não deixe queimar).\n\nQuando terminar, jogue o vinho e deixe evaporar, mexendo um pouco.\n\nEnquanto isso, pegue os camarões, esprema o limão, coloque um pouco de sal e deixe descansar por 10 minutos.\n\nApós este tempo, apenas retire a água que se formou.\n\nColoque o caldo de camarão ou peixe na água fervente e adicione a água até cobrir o arroz.\n\nAdicione o molho com os tomates e tampe.\n\nBaixe o fogo, mexa de vez em quando e quando começar a evaporar, adicione mais água.\n\nVá colocando água e não deixe grudar.\n\nO arroz, no final, deve ficar sem líquido e cremoso.\n\nAssim que chegar no ponto, adicione o requeijão, o cheiro-verde, o parmesão e o camarão\n\nExperimente, ajuste o sal e pimenta-do-reino.\n\nDesligue o fogo, mexa bem.\n\nTampe por 5 minutos e sirva.',
    },
    {
        uid: '25',
        nomeReceita: 'Strogonoff de Frango',
        tipoReceita: 'Cozidos',
        dificuldade: 'Médio',
        tempoPreparo: '40min',
        imagemReceita: require('../../../assets/imagens/foods/strogonoffFrango.jpg'),
        iconeDificuldade: <FontAwesome name="star-half-empty" size={15} color="black" />,
        ingredientes: '• Filé de frango (cerca de 750 g)\n• 200 g de cogumelos (de sua preferência)\n• 1 cebola\n• 2 dentes de alho\n• 1 ½ colher (sopa) de mostarda \n• 1 ½ colher (sopa) de ketchup\n• 1 ½ colher (sopa) de molho inglês\n• 1 ½ xícara (chá) de creme de leite de caixinha\n• azeite a gosto\n• sal e pimenta-do-reino ',
        modoPreparo: 'Corte o peito de frango em cubos médios.\n\nCorte os cogumelos em três fatias (os menores corte apenas ao meio). \n\nDescasque e pique fino a cebola e os dentes de alho. \n\nAqueça uma panela no fogo médio, depois regue com 1 colher (sopa) de azeite doure e cebola e o alho. \n\nApós dourar os legumes adicione o frango e refogue junto com o alho e cebola. \n\nAdicione logo em seguida os temperos (pimenta do reino e sal)\n\nQuando tudo estiver dourado, e a água estiver quase secando (água essa do próprio frango) adicione o Ketchup, Mostarda e o Molho inglês. \n\nProve a comida e verifique se falta sal, caso faltar adicione um pouco mais e logo em seguida adicione o creme de leite. \n\nEspere cozinhar por mais 1 minuto e estará pronto ',
    },
    {
        uid: '26',
        nomeReceita: 'Torta de Frango',
        tipoReceita: 'Massas',
        dificuldade: 'Médio',
        tempoPreparo: '40min',
        imagemReceita: require('../../../assets/imagens/foods/tortaFrango.jpg'),
        iconeDificuldade: <FontAwesome name="star-half-empty" size={15} color="black" />,
        ingredientes: 'Recheio:\n\n500 g de peito de frango sem pele\n• ½ litro de caldo de galinha\n• 4 colheres (sopa) de óleo\n• 1 dente de alho amassado\n• 1 cebola picada\n• 3 tomates sem pele e sem sementes\n• 1 xícara (chá) de ervilhas\n• sal e pimenta-do-reino a gosto\n\nMassa:\n\n250 ml de leite\n• 3/4 de xícara (chá) de óleo\n• 2 ovos\n• 1 e ½ xícara (chá) de farinha de trigo\n• sal a gosto\n• 1 colher (sopa) de fermento em pó\n• queijo ralado a gosto',
        modoPreparo: '• Recheio:\n\nCozinhe o peito de frango no caldo até ficar macio.\n\nSepare 1 xícara (chá) de caldo do cozimento e reserve.\n\nRefogue os demais ingredientes e acrescente as ervilhas por último.\n\nDesfie o frango, misture ao caldo e deixe cozinhar até secar.\n\n• Massa:\n\nBata o leite, o óleo e os ovos no liquidificador em velocidade baixa.\n\nAcrescente aos poucos a farinha, o sal e o fermento.\n\nDespeje metade da massa em uma forma untada e adicione o recheio sobre ela.\n\nCubra com o restante de massa e o queijo ralado.\n\nLeve ao forno preaquecido (180° C) até dourar.',
    },


]

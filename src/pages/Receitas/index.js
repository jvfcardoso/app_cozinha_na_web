import React, { useRef, useState, useEffect } from 'react';
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
    BoxPesquisar,
    Pesquisar,
    BoxRadios,
    TextRadio,
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
    InfoReceitas,
    BoxModoPreparo,
    TextInfoTipoReceitas,
    TextInfoDificuldadeReceitas,
    TextInfoTempoPreparoReceitas,
} from '../Receitas/TelaReceitas/styles';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Modalize } from 'react-native-modalize';
import { Info } from '../Receitas/TelaReceitas/InfoReceitas';
import { RadioButton } from 'react-native-paper';

export default function Receitas({navigation}) {
    const [searchText, setSearchText] = useState('');
    const [list, setList] = useState(dadosReceitas);
    const [clickMassas, setClickMassas] = useState(0);
    const [clickCozidos, setClickCozidos] = useState(0);
    const [clickSobremesas, setClickSobremesas] = useState(0);
    const [clickBolos, setClickBolos] = useState(0);
    const [clickFrituras, setClickFrituras] = useState(0);
    const [clickHamburguer, setClickHamburguer] = useState(0);
    const [clickTodas, setClickTodas] = useState(0);
    const [clickSaladas, setClickSaladas] = useState(0);
    const [clickAssados, setClickAssados] = useState(0);
    const [clickChurrasco, setClickChurrasco] = useState(0);
    const [clickFacil, setClickFacil] = useState(0);
    const [clickMedio, setClickMedio] = useState(0);
    const [clickDificil, setClickDificil] = useState(0);
    const [clickDificuldadeTodas, setClickDificuldadeTodas] = useState(0);
    const [checked, setChecked] = useState('unchecked');
    const [colorIconFav, setColorIconFav] = useState('');
    const [iconFav, setIconFav] = useState('heart-o');

    // Pesquisar
    useEffect(() => {
        if(searchText === ''){
            setList(dadosReceitas);
        }else{
            setList(
                dadosReceitas.filter((item) => (item.nomeReceita.toLowerCase().indexOf(searchText.toLowerCase()) > -1))
            );
        }
    }, [searchText]);

    // Categorias
    useEffect(() =>{
        if(clickMassas > 0){
            setList(dadosReceitas.filter((item) => item.tipoReceita == 'Massas'));
        }else{
            setList(dadosReceitas);
        }
    }, [clickMassas]);

    useEffect(() =>{
        if(clickSobremesas > 0){
            setList(dadosReceitas.filter((item) => item.tipoReceita == 'Sobremesas'));
        }else{
            setList(dadosReceitas);
        }
    }, [clickSobremesas]);

    useEffect(() =>{
        if(clickBolos > 0){
            setList(dadosReceitas.filter((item) => item.tipoReceita == 'Bolos'));
        }else{
            setList(dadosReceitas);
        }
    }, [clickBolos]);

    useEffect(() =>{
        if(clickHamburguer > 0){
            setList(dadosReceitas.filter((item) => item.tipoReceita == 'Hambúrgueres'));
        }else{
            setList(dadosReceitas);
        }
    }, [clickHamburguer]);

    useEffect(() =>{
        if(clickFrituras > 0){
            setList(dadosReceitas.filter((item) => item.tipoReceita == 'Frituras'));
        }else{
            setList(dadosReceitas);
        }
    }, [clickFrituras]);

    useEffect(() =>{
        if(clickCozidos > 0){
            setList(dadosReceitas.filter((item) => item.tipoReceita == 'Cozidos'));
        }else{
            setList(dadosReceitas);
        }
    }, [clickCozidos]);

    useEffect(() => {
        if(clickTodas > 0){
            setList(dadosReceitas);
        }else{
            return
        }
    }, [clickTodas]);

    useEffect(() =>{
        if(clickSaladas > 0){
            setList(dadosReceitas.filter((item) => item.tipoReceita == 'Saladas'));
        }else{
            setList(dadosReceitas);
        }
    }, [clickSaladas]);
    
    useEffect(() =>{
        if(clickAssados > 0){
            setList(dadosReceitas.filter((item) => item.tipoReceita == 'Assados'));
        }else{
            setList(dadosReceitas);
        }
    }, [clickAssados]);
    
    useEffect(() =>{
        if(clickChurrasco > 0){
            setList(dadosReceitas.filter((item) => item.tipoReceita == 'Churrasco'));
        }else{
            setList(dadosReceitas);
        }
    }, [clickChurrasco]);
    
    // Dificuldades
    useEffect(() =>{
        if(clickDificuldadeTodas > 0){
            setList(list);           
        }else{
            return
        }
    }, [clickDificuldadeTodas]);

    useEffect(() =>{
        if(clickFacil > 0){
            setList(list.filter((item) => item.dificuldade == 'Fácil'));
        }else{
            setList(list);
        }
    }, [clickFacil]);
    
    useEffect(() =>{
        if(clickMedio > 0){
            setList(list.filter((item) => item.dificuldade == 'Médio'));
        }else{
            setList(list);
        }
    }, [clickMedio]);

    useEffect(() =>{
        if(clickDificil > 0){
            setList(list.filter((item) => item.dificuldade == 'Difícil'));
        }else{
            setList(list);
        }
    }, [clickDificil]);


    const modalizeRef = useRef(null);
    
    let [imagem, setImagem] = useState('');
    let [nome, setNome] = useState('');
    let [ingredientes, setIngredientes] = useState('');
    let [modoPreparo, setModoPreparo] = useState('');
    let [tipoReceita, setTipoReceita] = useState('');
    let [dificuldade, setDificuldade] = useState('');
    let [tempoPreparo, setTempoPreparo] = useState('');
    let [iconeDificuldade, setIconeDificuldade] = useState('');

    function alterarReceita(imagemReceita, nomeReceita, ingredientes, modoPreparo, tipoReceita, dificuldade, tempoPreparo, iconeDificuldade) {

        setImagem(imagemReceita);
        setNome(nomeReceita);
        setIngredientes(ingredientes);
        setModoPreparo(modoPreparo);
        setTipoReceita(tipoReceita);
        setDificuldade(dificuldade);
        setTempoPreparo(tempoPreparo);
        setIconeDificuldade(iconeDificuldade);

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
                                <InfoReceitas>
                                        <TextInfoTipoReceitas>
                                            <MaterialIcons name="category" size={15} color="black" />{'  '}{tipoReceita}
                                        </TextInfoTipoReceitas>

                                        <TextInfoDificuldadeReceitas>
                                            {iconeDificuldade}{'  '}{dificuldade}
                                        </TextInfoDificuldadeReceitas>

                                        <TextInfoTempoPreparoReceitas>
                                            <FontAwesome5 name="hourglass-start" size={15} color="black" />{'  '}{tempoPreparo}
                                        </TextInfoTempoPreparoReceitas>
                                </InfoReceitas>

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


            <BoxPesquisar>
                    <Pesquisar
                        placeholder={'Pesquisar receita'}
                        value={searchText}
                        onChangeText={(t) => setSearchText(t)}
                    />
            </BoxPesquisar>


                <BoxCategorias>
                    <Titulo>Categorias: </Titulo>
                    <Categorias horizontal={true} showsHorizontalScrollIndicator={false}>
                        <CartaoCategoria activeOpacity={0.8} onPress={() => {setClickTodas(clickTodas + 1), setChecked('unchecked')}}>
                            <TextCartao>
                                Todas
                            </TextCartao>
                        </CartaoCategoria>
                        <CartaoCategoria activeOpacity={0.8} onPress={() => {setClickMassas(clickMassas + 1), setChecked('unchecked')}}>
                            <TextCartao>
                                Massas
                            </TextCartao>
                        </CartaoCategoria>
                        <CartaoCategoria activeOpacity={0.8} onPress={() => {setClickCozidos(clickCozidos + 1), setChecked('unchecked')}}>
                            <TextCartao>
                                Cozidos
                            </TextCartao>
                        </CartaoCategoria>
                        <CartaoCategoria activeOpacity={0.8} onPress={() => {setClickSobremesas(clickSobremesas + 1), setChecked('unchecked')}}>
                            <TextCartao>
                                Sobremesas
                            </TextCartao>
                        </CartaoCategoria>
                        <CartaoCategoria activeOpacity={0.8} onPress={() => {setClickBolos(clickBolos + 1), setChecked('unchecked')}}>
                            <TextCartao>
                                Bolos
                            </TextCartao>
                        </CartaoCategoria>
                        <CartaoCategoria activeOpacity={0.8} onPress={() => {setClickHamburguer(clickHamburguer + 1), setChecked('unchecked')}}>
                            <TextCartao>
                                Hambúrgueres
                            </TextCartao>
                        </CartaoCategoria>
                        <CartaoCategoria activeOpacity={0.8} onPress={() => {setClickFrituras(clickFrituras + 1), setChecked('unchecked')}}>
                            <TextCartao>
                                Frituras
                            </TextCartao>
                        </CartaoCategoria>
                        <CartaoCategoria activeOpacity={0.8} onPress={() => {setClickSaladas(clickSaladas + 1), setChecked('unchecked')}}>
                            <TextCartao>
                                Saladas
                            </TextCartao>
                        </CartaoCategoria>
                        <CartaoCategoria activeOpacity={0.8} onPress={() => {setClickAssados(clickAssados + 1), setChecked('unchecked')}}>
                            <TextCartao>
                                Assados
                            </TextCartao>
                        </CartaoCategoria>
                        <CartaoCategoria activeOpacity={0.8} onPress={() => {setClickChurrasco(clickChurrasco + 1), setChecked('unchecked')}}>
                            <TextCartao>
                                Churrasco
                            </TextCartao>
                        </CartaoCategoria>
                    </Categorias>
                </BoxCategorias>


                    <BoxRadios>
                <Titulo>Dificuldade: </Titulo>
                        <RadioButton
                            value="first"
                            status={checked === 'first' ? 'checked' : 'unchecked'}
                            onPress={() => {setClickFacil(clickFacil + 1), setChecked('first')}}
                            color= '#fab111'
                        />
                        <TextRadio>
                            Fácil
                        </TextRadio>
                   
                        <RadioButton
                            value="second"
                            status={checked === 'second' ? 'checked' : 'unchecked'}
                            onPress={() => {setClickMedio(clickMedio + 1), setChecked('second')}}
                            color= '#fab111'
                        />
                        <TextRadio>
                            Médio
                        </TextRadio>
                    
                        <RadioButton
                            value="third"
                            status={checked === 'third' ? 'checked' : 'unchecked'}
                            onPress={() => {setClickDificil(clickDificil + 1), setChecked('third')}}
                            color= '#fab111'
                        />
                        <TextRadio>
                            Difícil
                        </TextRadio>

                        <RadioButton
                            value="fourth"
                            status={checked === 'fourth' ? 'checked' : 'unchecked'}
                            onPress={() => {setClickDificuldadeTodas(clickDificuldadeTodas + 1), setChecked('fourth')}}
                            color= '#fab111'
                        />
                        <TextRadio>
                            Todas
                        </TextRadio>
                    </BoxRadios>

            <PaginaReceitas showsVerticalScrollIndicator={false}>
                <FlatList
                    style={{ marginBottom: 35, marginTop: 10 }}
                    showsVerticalScrollIndicator={false}
                    data={list}
                    renderItem={({ item }) => (
                        <BoxReceitas
                            activeOpacity={0.8}
                            style={{ backgroundColor: item.uid % 2 == 0 ? '#FBF6E3' : '#FAB111' }}
                            onPress={() => alterarReceita(item.imagemReceita, item.nomeReceita, item.ingredientes, item.modoPreparo, item.tipoReceita, item.dificuldade, item.tempoPreparo, item.iconeDificuldade)}
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
                                    
                                >
                                    <FontAwesome name="heart-o" size={22} color="#000" />
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
        tipoReceita: 'Saladas',
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
    {
        uid: '27',
        nomeReceita: 'Salada de Vegetais',
        tipoReceita: 'Saladas',
        dificuldade: 'Fácil',
        tempoPreparo: '30min',
        imagemReceita: require('../../../assets/imagens/foods/SALADA.jpg'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />,
        ingredientes: '• 1 batata média em cubos pequenos\n• 1 cenoura média em cubos pequenos\n• meia xícara (chá) de vagem em pedaços pequenos\n• meia xícara (chá) de ervilhas frescas\n• 1 pote de Iogurte Tradicional\n• 1 colher (sopa) de azeite\n• 1 colher (sopa) de mostarda\n• 1 pitada de pimenta-do-reino\n• 1 colher (chá) de sal\n• 10 azeitonas verdes picadas\n• meia cebola roxa bem picada\n• 3 colheres (sopa) de cebolinha-verde picada\n• 1 colher (sopa) de salsa picada',
        modoPreparo: 'Em uma panela com água fervente e sal coloque a batata, a cenoura e a vagem. Cozinhe por 5 minutos.\n\nJunte as ervilhas e deixe finalizar o cozimento até que tudo esteja macio, porém sem desmanchar (cerca de 10 minutos).\n\nEscorra e reserve.\n\nEm um recipiente grande misture o Iogurte, o azeite, a mostarda, a pimenta-do-reino e o sal.\n\nJunte os legumes reservados, as azeitonas, a cebola, a cebolinha e a salsa e misture delicadamente.\n\nCubra com plástico-filme e deixe gelar até o momento de servir.'
    },
    {
        uid: '28',
        nomeReceita: 'Frango a Passarinho',
        tipoReceita: 'Frituras',
        dificuldade: 'Fácil',
        tempoPreparo: '60min',
        imagemReceita: require('../../../assets/imagens/foods/frango.jpg'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />,
        ingredientes: '• 10 asas de frango\n• 4 dentes de alho amassados\n• suco de 1 limão\n• 1 colher (sopa) de azeite\n• óleo para fritar\n• páprica a gosto\n• sal a gosto\n• pimenta tabasco a gosto',
        modoPreparo: 'Em uma tigela, adicione o alho, o sal, a pimenta, o limão, a páprica e o óleo, depois misture com uma colher.\n\nAdicione os pedaços de frango e misture com as mãos até que os pedaços estejam completamente temperados, depois deixe descansar por 30 minutos.\n\nEm uma panela grande, adicione o óleo e aqueça-o, depois despeje o frango e deixe fritar até que esteja bem dourado dos dois lados.'
    },
    {
        uid: '29',
        nomeReceita: 'Pão de Alho para churrasco',
        tipoReceita: 'Churrasco',
        dificuldade: 'Fácil',
        tempoPreparo: '10min',
        imagemReceita: require('../../../assets/imagens/foods/paoAlho.jpg'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />,
        ingredientes: '• 6 pães franceses (médios)\n• 1 vidro pequeno de maionese\n• 2 colheres (sopa) de alho picadinho\n• 1 colher (sopa) não muito cheia de orégano\n• 1/2 xícara (chá) de cheiro-verde picado\n• 1/2 xícara (chá) de parmesão ralado\n• sal e pimenta a gosto',
        modoPreparo: 'Em um recipiente misture a maionese, o alho, o orégano, o cheiro-verde, o sal e a pimenta e reserve.\n\nFaça cortes horizontais no pão francês de maneira a formar pequenas fatias (mais ou menos 4), mas sem desprendê-las umas das outras (como no pão de alho comprado).\n\nPasse a mistura reservada entre as fatias e depois envolvendo todo os pães.\n\nPolvilhe sobre os pães o parmesão ralado.\n\nLeve à churrasqueira e asse bem de ambos os lados.'
    },
    {
        uid: '30',
        nomeReceita: 'Espetinho de Carne',
        tipoReceita: 'Churrasco',
        dificuldade: 'Fácil',
        tempoPreparo: '10min',
        imagemReceita: require('../../../assets/imagens/foods/espetinho.jpeg'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />,
        ingredientes: '• 300 g de alcatra\n• sal a gosto\n• pimenta-do-reino a gosto\n• salda desidratada a gosto\n• bacon 300 g\n• 1 pimentão verde\n• 1 piomentão vermelho\n• 1 cebola',
        modoPreparo: 'Corte a alcatra em pequenos cubos e tempere com sal, pimenta-do-reino e salsinha desidratada.\n\nCorte o pimentão verde, vermelho, a cebola e o bacon em pedaços pequenos.\n\nPegue os palitos de de churrasco e comece a montar o espetinho.\n\nPrimeiro espete o bacon, depois o pimentão vermelho, a cebola, a alcatra, o pimentão verde e assim por diante.\n\nLeve a churrasqueira e tempere os espetinhos com sal grosso.\n\nCozinhe até o ponto desejado.'
    },
    {
        uid: '31',
        nomeReceita: 'Bolo de Milho',
        tipoReceita: 'Bolos',
        dificuldade: 'Fácil',
        tempoPreparo: '55min',
        imagemReceita: require('../../../assets/imagens/foods/boloMilho.jpg'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />,
        ingredientes: '• 1 lata de milho verde com água e tudo\n• Meia lata da mesma de óleo\n• 1 lata da mesma de açúcar\n• Meia lata da mesma de fubá\n• 4 ovos\n• 2 colheres bem cheias de farinha de trigo\n• 2 colheres de coco ralado\n• 1 colher e meia de chá bem cheia de fermento em pó',
        modoPreparo: 'Bata bastante todos os ingredientes no liquidificador. Depois acrescente coco ralado, fermento e misture. Coloque para assar.\n\nColoque na forma redonda com buraco e na quadrada. A forma deverá ser untada e enfarinhada.\n\nO tempo de preparo na redonda é mais rápido, mas a receita fica menor. Para aumentar, faça com o dobro dos ingredientes.\n\nO bolo fica parecendo pamonha, bem cremoso, uma delicia!\n\nLeve ao forno preaquecido a 180 graus Celsius por, aproximadamente, 40 minutos.'
    },
    {
        uid: '32',
        nomeReceita: 'Bolo de cenoura com cobertura de brigadeiro',
        tipoReceita: 'Bolos',
        dificuldade: 'Fácil',
        tempoPreparo: '70min',
        imagemReceita: require('../../../assets/imagens/foods/boloCenoura.jpg'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />,
        ingredientes: 'Massa do bolo de cenoura\n\n• 3 cenouras médias (250g)\n• 4 ovos\n• meia xícara (chá) de óleo\n• 2 e meia xícaras (chá) de farinha de trigo\n• 2 xícaras (chá) de açúcar\n• 1 colher (sopa) de fermento em pó\n\nCobertura de Brigadeiro\n\n• 1 Leite MOÇA (lata ou caixinha) 395g\n• 1 colher (sopa) de manteiga\n• meia xícara (chá) de Chocolate em Pó\n• meia xícara (chá) de chocolate granulado',
        modoPreparo: 'Massa do Bolo de Cenoura\n\nEm um liquidificador, bata as cenouras, os ovos e o óleo.\n\nDespeje a mistura em um recipiente e misture o açúcar e a farinha de trigo peneirada com o fermento.\n\nColoque em uma fôrma retangular (20 x 30 cm) untada, e leve ao forno médio (180°C), preaquecido, por 40 minutos.\n\nEnquanto isso, prepare a cobertura de brigadeiro.\n\nCobertura de Brigadeiro\n\nEm uma panela coloque o Leite MOÇA, o Chocolate em Pó e a manteiga e leve ao fogo baixo, mexendo sempre, até começar a desprender da panela.\n\nDespeje ainda quente sobre o bolo, distribua o chocolate granulado e deixe esfriar.'
    },
    {
        uid: '33',
        nomeReceita: 'Bolo de Fubá',
        tipoReceita: 'Bolos',
        dificuldade: 'Fácil',
        tempoPreparo: '30min',
        imagemReceita: require('../../../assets/imagens/foods/boloFuba.jpg'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />,
        ingredientes: '• 3 ovos inteiros• 2 xícaras (chá) de açúcar\n• 2 xícaras (chá) de fubá\n• 3 colheres (sopa) de farinha de trigo\n• 1/2 copo (americano) de óleo\n• 1 copo (americano) de leite\n• 1 colher (sopa) de fermento em pó',
        modoPreparo: 'Em um liquidificador, adicione os ovos, o açúcar, o fubá, a farinha de trigo, o óleo, o leite e o fermento, depois bata até a massa ficar lisa e homogênea.\n\nDespeje a massa em uma forma untada e polvilhada.\n\nLeve para assar em forno médio 180 °C preaquecido por 40 minutos.',
    },
    {
        uid: '34',
        nomeReceita: 'Hambúrguer à parmegiana',
        tipoReceita: 'Hambúrgueres',
        dificuldade: 'Fácil',
        tempoPreparo: '25min',
        imagemReceita: require('../../../assets/imagens/foods/hamburguerParmegiana.jpg'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />,
        ingredientes: '• 200 gramas de carne moída de primeira por hambúrguer (coxão mole, alcatra ou patinho)\n• Sal e demais temperos à gosto (pimenta do reino, lemon pepper, chimichurri, etc)\n• Pão de hambúrguer ou o acompanhamento de sua escolha\n• 2 fatias de queijo mussarela por hambúrguer\n• 2 colheres (sopa) de molho de tomate\n• 1 dente de alho picado ou moído\n• Meia cebola bem picada\n• 1 tomate bem picado',
        modoPreparo: 'Tempere o hambúrguer com metade do alho e cebola picadas\n\nAdicione sal demais temperos à gosto e misture\n\nMolde o hambúrguer no tamanho e formato desejado e reserve\n\nEm uma panela, refogue o restante da cebola e do alho\n\nQuando dourar, adicione o tomate e refogue um pouco mais\n\nAdicione o extrato ou molho de tomate e um pouco de água\n\nDeixe cozinhar um pouco até ficar no ponto desejado e reserve\n\nColoque um fio de óleo ou azeite em uma frigideira e esquente em fogo alto\n\nQuando estiver saindo fumaça, coloque o hambúrguer para selar\n\nAssim que estiver dourado e selado de um lado, vire o hambúrguer\n\nQuando estiver próximo de ficar pronto no ponto desejado, adicione as fatias de muçarela por cima e tampe a frigideira até o queijo derreter\n\nColoque o hambúrguer pronto no pão ou junto com o acompanhamento desejado (arroz, por exemplo) e adicione o molho por cima; e sirva!',
    },
    {
        uid: '35',
        nomeReceita: 'Hambúrguer com cheddar e cebola caramelizada',
        tipoReceita: 'Hambúrgueres',
        dificuldade: 'Fácil',
        tempoPreparo: '40min',
        imagemReceita: require('../../../assets/imagens/foods/hamburguerCheddarCebola.jpg'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />,
        ingredientes: '• 800 gramas de carne moída\n• Molho Shoyu\n• 1 colher de chá de sal\n• 1 colheres de chá de pimenta-do-reino preta moída na hora\n• 3 colheres de sopa de óleo\n• 4 fatias de queijo cheddar\n• 4 colheres de sopa de Maionese\n• 4 pães para hambúrguer brancos\n• 1 cebola roxa fatiada\n• 1 colher de chá de margarina\n• ½ colher de sopa de açúcar mascavo\n• 1 colher de sopa de molho de soja',
        modoPreparo: 'Aqueça rapidamente uma panela larga e adicione a margarina. Quando começar a derreter acrescente a cebola e cozinhe em fogo médio, mexendo sempre. Quando a cebola estiver dourada junte o molho shoyu, o açúcar mascavo e cozinhe até dourar. Reserve.\n\nTempere a carne com sal e pimenta do reino.\n\nSepare a carne em 4 porções. Molde os 4 hambúrgueres com a ajuda de um aro de metal ou na palma das mãos. Embale em papel filme e leve à geladeira por 1 hora.\n\nAqueça bem uma grelha ou frigideira e unte com óleo. Quando estiver bem quente grelhe o hambúrguer até que os dois lados fiquem bem dourados.\n\nColoque os hambúrgueres grelhados numa tábua e disponha as fatias de queijo por cima. Abafe com uma tampa de panela para que o queijo derreta.\n\nMonte os hambúrgueres passando a maionese nos dois lados dos pães, coloque o hambúrguer com o queijo por cima e finalize com as cebolas caramelizadas.',

    },
    {
        uid: '36',
        nomeReceita: 'Frango assado com limão e alho',
        tipoReceita: 'Assados',
        dificuldade: 'Fácil',
        tempoPreparo: '60min',
        imagemReceita: require('../../../assets/imagens/foods/frangoAssado.jpg'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />,
        ingredientes: '• Frango em pedaços: 1 kg\n• Alho amassado: 4 dente(s)\n• Limão: 1 unidade\n• Sal: 1 colher de sopa\n• Batatas lavadas, com cascas e cortadas em 4 : 3 unidades',
        modoPreparo: 'Na noite anterior, tempere o frango com o sal, o alho amassado e o suco de limão. Espalhe bem, cubra com filme plástico e leve para geladeira.\n\nNo dia seguinte, retire o frango da geladeira 2h antes de servir. Deixe 1h em temperatura ambiente para desgelar.\n\nPreaqueça o forno a 200º, transfira o frango par uma assadeira grande, coloque as batatas e leve ao forno para assar por 1h.\n\nRetire do forno e sirva em seguida.',
    },
    {
        uid: '37',
        nomeReceita: 'Churrasco completo',
        tipoReceita: 'Churrasco',
        dificuldade: 'Médio',
        tempoPreparo: '+2h',
        imagemReceita: require('../../../assets/imagens/foods/churrascoCompleto.jpg'),
        iconeDificuldade: <FontAwesome name="star-half-empty" size={15} color="black" />,
        ingredientes: '300-400 g de carne por pessoa:picanha inteira ou cortada\n• lombo de porco\n• linguiça\n• costelinha de porco\n• frango aos pedaços\n• coração de frango\n• sal grosso\n• pimenta-do-reino',
        modoPreparo: 'Acender o fogo em antecedência para que se formem brasas, que a fumaça inicial desapareça e que se forme uma camada fina de fuligem sobre as brasas, que impede que se levantem labaredas que estragam a carne.\n\nQuando necessário, para manter o fogo aceso, colocar delicadamente um pedacinho de carvão um de cada vez, que evita a formação de labaredas.\n\nAs carnes podem ser previamente marinadas ou simplesmente temperadas com sal grosso na hora de assar.\n\nPara conservar os sucos dentro da carne é necessário “selar” a carne colocando-a por alguns minutos perto das chamas, sem deixar queimar, e depois terminar de assar na parte mais alta da churrasqueira.\n\nOs pedaços grandes de carne devem ser embrulhados em papel alumínio e são os primeiros a serem colocados na churrasqueira, na parte alta longe das brasas, para iniciar o cozimento lentamente. Passados 30 minutos retirar o alumínio e deixar dourar.\n\nColocar as outras carne, iniciando pelo frango, depois as costelinhas de porco, as linguiças e os corações de frango.\n\nVirar a carne frequentemente e regar com salmoura ou cerveja.\n\nNa hora de servir retirar o excesso de sal grosso.\n\nOs coraçõezinhos devem ser os primeiros a serem servidos, come antepasto, junto com outros tira-gosto.',
    },
    {
        uid: '38',
        nomeReceita: 'Arroz branco',
        tipoReceita: 'Cozidos',
        dificuldade: 'Fácil',
        tempoPreparo: '30min',
        imagemReceita: require('../../../assets/imagens/foods/arrozBranco.jpg'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />,
        ingredientes: '• 2 dentes de alho picados\n• 1 fio (sopa) de óleo\n• 1 colher (chá) de sal\n• 2 xícaras de arroz\n• 3 xícaras de água quente',
        modoPreparo: 'Lave bem o arroz.\n\nColoque a água para ferver.\n\nSoque o alho picado.\n\nEm seguida, numa panela, coloque o alho picado e socado, espere.\n\nAcrescente então o óleo e deixe dourar.\n\nQuando o alho começar a suar, adicione o arroz.\n\nRefogue o arroz, e em seguida, coloque a água quente e o sal.\n\nBaixe o fogo, deixe a panela semi-tampada e deixe cozinhar até a água secar.\n\nPronto.'
    }


]

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
            setList(dadosReceitas.filter((item) => item.tipoReceita == 'Hamb??rgueres'));
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
            setList(list.filter((item) => item.dificuldade == 'F??cil'));
        }else{
            setList(list);
        }
    }, [clickFacil]);
    
    useEffect(() =>{
        if(clickMedio > 0){
            setList(list.filter((item) => item.dificuldade == 'M??dio'));
        }else{
            setList(list);
        }
    }, [clickMedio]);

    useEffect(() =>{
        if(clickDificil > 0){
            setList(list.filter((item) => item.dificuldade == 'Dif??cil'));
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
                                Hamb??rgueres
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
                            F??cil
                        </TextRadio>
                   
                        <RadioButton
                            value="second"
                            status={checked === 'second' ? 'checked' : 'unchecked'}
                            onPress={() => {setClickMedio(clickMedio + 1), setChecked('second')}}
                            color= '#fab111'
                        />
                        <TextRadio>
                            M??dio
                        </TextRadio>
                    
                        <RadioButton
                            value="third"
                            status={checked === 'third' ? 'checked' : 'unchecked'}
                            onPress={() => {setClickDificil(clickDificil + 1), setChecked('third')}}
                            color= '#fab111'
                        />
                        <TextRadio>
                            Dif??cil
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
        dificuldade: 'M??dio',
        tempoPreparo: '45min',
        imagemReceita: require('../../../assets/imagens/foods/pizzaMussarela.jpg'),
        iconeDificuldade: <FontAwesome name="star-half-empty" size={15} color="black" />,
        ingredientes: '??? 1 envelope de Fermento Biol??gico Seco (10g)\n??? 2 x??caras (ch??) de ??gua\n??? 1kg de Farinha de Trigo\n??? 2 colheres (ch??) de sal\n??? 2 colheres (sopa) de a????car\n??? ?? x??cara (ch??) de ??leo\n\nCobertura\n\n??? 1 x??cara (ch??) de molho de tomate\n??? Queijo mu??arela ralado a gosto\n??? Or??gano e azeite de oliva a gosto',
        modoPreparo: 'Em um recipiente, junte o Fermento com 1 x??cara (ch??) de ??gua e ?? x??cara (ch??) de farinha\n\nMisture bem para dissolver o fermento.\n\nAdicione o restante da ??gua, o sal, o a????car e o ??leo.\n\nAos poucos, acrescente o restante da farinha e sove bem at?? a massa ficar lisa e homog??nea.\n\nCubra e deixe crescer at?? dobrar de volume.\n\nSove novamente, divida a massa em 6 por????es e forme bolas.\n\nCubra e deixe descansar por mais 30 minutos.\n\nAbra cada por????o no formato de um disco, coloque em assadeiras redondas e espalhe um pouco de molho de tomate.\n\nAsse em forno m??dio (180??C), preaquecido, por 15 minutos, ou at?? as bordas dourarem levemente.\n\nRetire do forno, espalhe mais um pouco de molho de tomate, polvilhe a mu??arela e o or??gano, e regue com o azeite.\n\nVolte ao forno por mais 15 minutos, ou at?? derreter o queijo.\n\nSirva quente.',
    },
    {
        uid: '2',
        nomeReceita: 'Salada de Frutas',
        tipoReceita: 'Saladas',
        dificuldade: 'F??cil',
        tempoPreparo: '30min',
        imagemReceita: require('../../../assets/imagens/foods/saladaFrutas.jpg'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />,
        ingredientes: '??? 1 lata de leite condensado\n??? 1 lata de creme de leite\n??? 1 medida da lata de suco de laranja (use a lata de leite condensado vazia para medir)\n??? frutas de sua prefer??ncia (abacaxi, banana, manga, mel??o, morango, mam??o, ma????, pera, uva, entre outras)',
        modoPreparo: 'Em uma tigela, misture o leite condensado, o creme de leite e o suco de laranja. Reserve.\n\nPique as frutas de sua prefer??ncia e coloque-as em uma tigela.\n\nAdicione o creme reservado e leve ?? geladeira por, no m??nimo, 1 hora.\n\nSirva gelada.'
    },
    {
        uid: '3',
        nomeReceita: 'Lasanha',
        tipoReceita: 'Massas',
        dificuldade: 'M??dio',
        tempoPreparo: '50min',
        imagemReceita: require('../../../assets/imagens/foods/lasanha.jpg'),
        iconeDificuldade: <FontAwesome name="star-half-empty" size={15} color="black" />,
        ingredientes: '??? 500 g de massa de lasanha\n??? 500 g de carne mo??da\n??? 2 caixas de creme de leite\n??? 3 colheres de manteiga\n??? 3 colheres de farinha de trigo\n??? 500 g de presunto\n??? 500 g de mussarela\n??? sal a gosto\n??? 2 copos de leite\n??? 1 cebola ralada\n??? 3 colheres de ??leo\n??? 1 caixa de molho de tomate\n??? 3 dentes de alho amassados\n??? 1 pacote de queijo ralado',
        modoPreparo: 'Cozinhe a massa segundo as orienta????es do fabricante, despeje em um refrat??rio com ??gua gelada para n??o grudar e reserve.\n\n??? Molho ?? bolonhesa\nRefogue o alho, a cebola, a carne mo??da, o molho de tomate, deixe cozinhar por 3 minutos e reserve.\n\n??? Molho branco\nDerreta a margarina, coloque as 3 colheres de farinha de trigo e mexa.\n\nDespeje o leite aos poucos e continue mexendo.\n\nPor ??ltimo, coloque o creme de leite, mexa por 1 minuto e desligue o fogo.\n\n??? Montagem\nDespeje uma parte do molho ?? bolonhesa em um refrat??rio, a metade da massa, a metade do presunto, a metade da mussarela, todo o molho branco e o restante da massa.\n\nRepita as camadas at?? a borda do recipiente.\n\nFinalize com o queijo ralado e leve ao forno alto (220?? C), pr??-aquecido, por cerca de 20 minutos.',

    },
    {
        uid: '4',
        nomeReceita: 'X-Burguer',
        tipoReceita: 'Hamb??rgueres',
        dificuldade: 'F??cil',
        tempoPreparo: '15min',
        imagemReceita: require('../../../assets/imagens/foods/x-burger.jpeg'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />,
        ingredientes: '??? 2 hamb??rgueres\n??? ??leo para fritar\n??? 2 fatias de mussarela\n??? 2 p??es para hamb??rguer\n??? Maionese\n??? 2 rodelas de tomate\n??? 2 folhas de alface',
        modoPreparo: 'Frite os hamb??rgueres com um pouquinho de ??leo , quando estiver frito cubra com a mussarela.\n\nRetire do fogo e coloque no p??o.\n\nPasse no p??o a maionese e coloque o alface e tomate.'
    },
    {
        uid: '5',
        nomeReceita: 'Waffles',
        tipoReceita: 'Massas',
        dificuldade: 'F??cil',
        tempoPreparo: '20min',
        imagemReceita: require('../../../assets/imagens/foods/waffles.jpeg'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />,
        ingredientes: '??? 2 ovos\n??? ?? x??cara de ??leo\n??? 1 e 1/3 x??caras de leite\n??? 1 colherinha de canela em p??\n??? ?? x??cara de a????car\n??? 1 colherinha de fermento em p??\n??? 2 x??caras de farinha de trigo',
        modoPreparo: 'No liquidificador, bata os ovos, o ??leo, o leite, a canela e o a????car.\n\nSempre batendo, acrescente o fermento e a farinha de trigo aos poucos, at?? ficar uma massinha cremosa.\n\nAp??s, coloque-a na chapa do aparelho de waffles (bem quente e untada com ??leo para n??o queimar).\n\nFeche o aparelho e deixe o waffler ficar douradinho.\n\nSirva com mel ou marmelada (geleia).'

    },
    {
        uid: '6',
        nomeReceita: 'Macarr??o com Molho Vermelho',
        tipoReceita: 'Massas',
        dificuldade: 'F??cil',
        tempoPreparo: '20min',
        imagemReceita: require('../../../assets/imagens/foods/macarrao.jpeg'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />,
        ingredientes: '??? ?? massa de macarr??o\n??? uma embalagem de extrato de tomate\n??? molho de tomate\n??? 500 ml de ??gua\n??? sal a gosto',
        modoPreparo: 'Coloque a ??gua no fogo alto e espere ferver, depois adicione o sal a gosto de modo que a ??gua fique salgada.\n\nAdicione o macarr??o e espere entre 8 a 10 minutos, despeje a ??gua do macarr??o e coloque em uma vasilha.\n\nUtilize outra panela e preaque??a, adicione o ??leo e espere esquentar.\n\nAdicione o extrato de tomate e o molho de tomate, aguarde o caldo engrossar e sirva.'

    },
    {
        uid: '7',
        nomeReceita: 'Cookies',
        tipoReceita: 'Sobremesas',
        dificuldade: 'M??dio',
        tempoPreparo: '30min',
        imagemReceita: require('../../../assets/imagens/foods/cookies.jpeg'),
        iconeDificuldade: <FontAwesome name="star-half-empty" size={15} color="black" />,
        ingredientes: '??? 4 x??caras de farinha de trigo\n??? 1 colher de ch?? de fermento em p??\n??? 1 colher de ch?? de sal\n??? 1 e 1/2 x??cara de ch?? de manteiga (preferencialmente) s/ sal derretida ou margarina (aprox. 275 grs. )\n??? 2 x??caras de a????car mascavo escuro\n??? 1 x??cara de a????car branco\n??? 2 colheres de sopa de ess??ncia de baunilha\n??? 2 ovos inteiros\n??? 2 gemas\n??? 2 x??caras de chocolate ao leite picado em quadradinhos(aprox. 2 barras de 180 grs) (n??o use gotas, elas s??o duras)\n??? ?? x??cara de aveia em flocos grossos',
        modoPreparo: 'Reserve alguns pedacinhos de chocolate picado e da aveia, para enfeitar o cookie antes de assar.\n\nEm uma tigela grande, coloque os a????cares, os ovos inteiros, as duas gemas e a baunilha.\n\nMisture bem.\n\nDerreta a manteiga e acrescente na mistura de a????car e ovos.\n\nMexa bem, at?? ficar homog??neo.\n\nPeneire sobre a mistura a farinha juntamente com o sal e o fermento.\n\nJunte a aveia e o chocolate picado.\n\nMisture, tampe e leve ?? geladeira por no m??nimo 3 horas, pois a massa deve ficar bem dura.\n\nVoc?? pode fazer na noite anterior e assar pela manh??.\n\nN??o guarde a massa mais do que 1 dia na geladeira, pode estragar.\n\nDepois de bem dura, unte 2 formas grandes com manteiga e farinha, fa??a bolas de 4 a 5 cm de di??metro e d?? uma leve pressionada nela, para fica mais num formato de disco, n??o de bola.\n\nDeixe um espa??o de 2 dedos de dist??ncia entre um cookie do outro.\n\nColoque 2 a 3 quadradinhos de chocolate em cima e salpique com os flocos de aveia pra decorar.\n\nRende de 28 a 32 cookies grandes.\n\nAsse em forno pr?? aquecido 190 graus por 12-13 minutos apenas.\n\nV??o parecer que n??o est??o prontos mas confie, estar??o prontos.\n\nAos poucos vc descobrir?? o ponto exato do cookie, pois a diferen??a de calor dos fornos pode influenciar.\n\nDeixe amornar, pois o cozimento ainda continua depois de tirado do forno.\n\nPor fora ele fica levemente crocante e dentro macio e com chocolate derretido.\n\nDesfrute com um cafezinho ou leite puro gelado!',
    },
    {
        uid: '8',
        nomeReceita: 'Bai??o de Dois',
        tipoReceita: 'Cozidos',
        dificuldade: 'M??dio',
        tempoPreparo: '40min',
        imagemReceita: require('../../../assets/imagens/foods/baiaoDois.jpg'),
        iconeDificuldade: <FontAwesome name="star-half-empty" size={15} color="black" />,
        ingredientes: '??? ?? kg de feij??o verde\n??? 1 paio cortado em rodelas\n??? 2 tabletes de caldo de carne\n??? 1 cebola ralada\n??? 1 dente de alho amassado\n??? 3 colheres (sopa) de ??leo\n??? ?? colher (sopa) de coento picado\n??? 2 x??caras e 1/2 (ch??) de arroz lavado e escorrido\n??? 150 g de queijo de coalho cortado em fatias finas',
        modoPreparo: 'Deixe o feij??o de molho de v??spera. No dia seguinte cozinhe-o juntamente com o caldo de carne e 2,5 litros de ??gua fria.\n\nTampe a panela e deixe cozinhar em fogo baixo por aproximadamente 1 hora.\n\nEm outra panela doure o paio, a cebola e o alho, no ??leo. Junte o coento e o arroz e refogue bem. Acrescente o feij??o j?? cozido, juntamente com o caldo. Misture bem, tampe a panela e deixe cozinhar at?? que o arroz fique cozido, ??mido e com consist??ncia cremosa.\n\nCubra o arroz com as fatias de queijo. Tampe a panela novamente e deixe que o vapor derreta o queijo.\n\nSirva acompanhado de carne-de-sol frita ou assada.',
    },
    {
        uid: '9',
        nomeReceita: 'Bolo de Chocolate',
        tipoReceita: 'Bolos',
        dificuldade: 'M??dio',
        tempoPreparo: '40min',
        imagemReceita: require('../../../assets/imagens/foods/boloChocolate.jpg'),
        iconeDificuldade: <FontAwesome name="star-half-empty" size={15} color="black" />,
        ingredientes: '??? 4 ovos\n??? 4 colheres (sopa) de chocolate em p??\n??? 2 colheres (sopa) de manteiga\n??? 3 x??caras (ch??) de farinha de trigo\n??? 2 x??caras (ch??) de a????car\n??? 2 colheres (sopa)de fermento\n??? 1 x??cara (ch??) de leite',
        modoPreparo: 'Em um liquidificador adicione os ovos, o chocolate em p??, a manteiga, a farinha de trigo, o a????car e o leite, depois bata por 5 minutos.\n\nAdicione o fermento e misture com uma esp??tula delicadamente.\n\nEm uma forma untada, despeje a massa e asse em forno m??dio (180 ??C) preaquecido por cerca de 40 minutos. N??o se esque??a de usar uma forma alta para essa receita: como leva duas colheres de fermento, ela cresce bastante! Outra solu????o pode ser colocar apenas uma colher de fermento e manter a sua receita em uma forma pequena.'
    },
    {
        uid: '10',
        nomeReceita: 'Brigadeiro',
        tipoReceita: 'Sobremesas',
        dificuldade: 'F??cil',
        tempoPreparo: '25min',
        imagemReceita: require('../../../assets/imagens/foods/brigadeiro.jpg'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />,
        ingredientes: '??? 1 caixa de leite condensado\n??? 1 colher (sopa) de margarina sem sal\n??? 7 colheres (sopa) de achocolatado ou 4 colheres (sopa) de chocolate em p??\n??? chocolate granulado',
        modoPreparo: 'Em uma panela funda, acrescente o leite condensado, a margarina e o chocolate em p??.\n\nCozinhe em fogo m??dio e mexa at?? que o brigadeiro comece a desgrudar da panela.\n\nDeixe esfriar e fa??a pequenas bolas com a m??o passando a massa no chocolate granulado.',
    },
    {
        uid: '11',
        nomeReceita: 'Carne de Panela',
        tipoReceita: 'Cozidos',
        dificuldade: 'M??dio',
        tempoPreparo: '50min',
        imagemReceita: require('../../../assets/imagens/foods/carnePanela.jpg'),
        iconeDificuldade: <FontAwesome name="star-half-empty" size={15} color="black" />,
        ingredientes: '??? 500 g de colch??o mole cortado em bifes\n??? 1 cebola ralado\n??? 1 dente de alho amassado\n??? ?? x??cara ch?? de ??leo\n??? sal e pimenta-do-reino a gosto\n??? 1 colher sopa de salsinha picada\n??? 500 ml de ??gua quente\n??? 1/2 lata de massa de tomate\n??? 1 piment??o verde picado\n??? 1 tomate sem sementes picado\n??? 1 cenoura pequena picada',
        modoPreparo: 'Em uma panela de press??o, coloque o ??leo junte a cebola, alho e refogue bem.\n\nAcrescente a carne frite por 5 minutos mexendo bem, coloque o tomate, piment??o, massa de tomate, cenoura e a seguir acrescente a ??gua.\n\nDeixe cozinhar por 30 minutos contando o inicio da fervura, assim que a carne estiver cozida retire do fogo, misture a salsinha e sirva em seguida.',
    },
    {
        uid: '12',
        nomeReceita: 'Coxinha de Frango',
        tipoReceita: 'Frituras',
        dificuldade: 'F??cil',
        tempoPreparo: '10min',
        imagemReceita: require('../../../assets/imagens/foods/coxinhaFrango.jpg'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />,
        ingredientes: '??? 2 copos de ??gua\n??? 1 copo de leite\n??? 1 colher de margarina\n??? 1 cubo de caldo de galinha\n??? sal a gosto\n??? 3 x??caras de trigo',
        modoPreparo: 'Coloque a ??gua, o leite, a margarina, o caldo e o sal em uma panela e misture at?? ferver.\n\nAbaixe o fogo e acrescente o trigo de uma s?? vez.\n\nMexa at?? obter uma massa lisa e homog??nea.\n\nRecheie da maneira que preferir.',
    },
    {
        uid: '13',
        nomeReceita: 'Feij??o cozido',
        tipoReceita: 'Cozidos',
        dificuldade: 'F??cil',
        tempoPreparo: '20min',
        imagemReceita: require('../../../assets/imagens/foods/feijaoCozido.jpg'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />,
        ingredientes: '??? Feij??o (350g)\n??? Alho (2 dentes)\n??? Sal ( A gosto)\n??? Bacon (A gosto)\n??? Lingui??a Defumada (A gosto)',
        modoPreparo: 'Em uma panela de press??o, coloque ??gua at?? sua metade e deixe ela ferver.\n\nEm um recipiente separe o feij??o, para n??o acabar cozinhando uma pedra junto.\n\nQuando a ??gua estiver fervendo, coloque o feij??o para cozinhar. Tampe a panela de press??o e espere por 13 minutos. \n\nPassado os 13 minutos, desligue o fogo e abra o pino da panela, para toda a press??o sair. \n\nEnquanto isso, pique o alho, ou amasse com um pouco de sal e corte a lingui??a e o bacon.\n\nEm uma panela a parte, coloque o bacon para fritar, se precisar coloque azeite no processo. Espere dourar e adicione a lingui??a e o alho.\n\nQuando tudo estiver j?? frito, adicione aos poucos o feij??o cozido na mistura.\n\nV?? colocando sal at?? o seu gosto.\n\nDeixe ferver por 5 minutos e j?? pode desligar e se servir.',
    },
    {
        uid: '14',
        nomeReceita: 'Feijoada',
        tipoReceita: 'Cozidos',
        dificuldade: 'Dif??cil',
        tempoPreparo: '140min',
        imagemReceita: require('../../../assets/imagens/foods/feijoada.jpg'),
        iconeDificuldade: <FontAwesome name="star" size={15} color="black" />,
        ingredientes: '??? 1 Kg de feij??o preto\n??? 100 g de carne seca\n??? 70 g de orelha de porco\n??? 70 g de rabo de porco\n??? 70 g de p?? de porco\n??? 100 g de costelinha de porco\n??? 50 g de lombo de porco\n??? 100 g de paio\n??? 150 g de ling??i??a portuguesa\n\nTempero:\n\n??? 2 cebolas grandes picadinhas\n??? 1 ma??o de cebolinha verde picadinha\n??? 3 folhas de louro\n??? 6 dentes de alho\n??? Pimenta do reino a gosto\n??? 1 ou 2 laranjas\n??? 40ml de pinga\n??? Sal se precisar',
        modoPreparo: 'Coloque as carnes de molho por 36 horas ou mais, v?? trocando a ??gua v??rias vezes, se for ambiente quente ou ver??o, coloque gelo por cima ou em camadas frias.\n\nColoque para cozinhar passo a passo: as carnes duras, em seguida as carnes moles.\n\nQuando estiver mole coloque o feij??o, e retire as carnes.\n\nFinalmente tempere o feij??o.',
    },
    {
        uid: '15',
        nomeReceita: 'Fil?? de Frango',
        tipoReceita: 'Assados',
        dificuldade: 'F??cil',
        tempoPreparo: '20min',
        imagemReceita: require('../../../assets/imagens/foods/fileFrango.jpg'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />,
        ingredientes: '??? 500 g de fil?? de frango\n??? 1 lim??o\n??? Sal a gosto',
        modoPreparo: 'Tempere os fil??s com o lim??o e sal. Deixe descansar por um tempo para apurar.\n\nDistribua a margarina na frigideira e coloque os fil??s. Cerca de 4 minutos de cada lado.',
    },
    {
        uid: '16',
        nomeReceita: 'Frango a parmegiana',
        tipoReceita: 'Assados',
        dificuldade: 'M??dio',
        tempoPreparo: '50min',
        imagemReceita: require('../../../assets/imagens/foods/frangoParmegiana.jpg'),
        iconeDificuldade: <FontAwesome name="star-half-empty" size={15} color="black" />,
        ingredientes: '??? 6 fil??s de peito de frango\n??? 2 dentes de alho\n??? sal e pimenta-do-reino a gosto\n??? 4 colheres de (sopa) de maionese\n??? 2 x??caras de (ch??) de farinha de rosca\n??? 1 lata de molho de tomate\n??? 200 g de mussarela\n??? ??leo o suficiente para untar',
        modoPreparo: 'Coloque os fil??s entre 2 filmes pl??sticos.\n\nBata suavemente com o martelo de carne para ficarem com a mesma espessura.\n\nTempere - os com o alho, o sal e a pimenta.\n\nPasse - os pela maionese e a farinha de rosca.\n\nColoque em uma assadeira untado com o ??leo.\n\nLeve ao forno m??dio por uns 30 minutos.Retire do forno, cubra com a mussarela e o molho.\n\nLeve ao forno novamente s?? para gratinar.\n\nSirva em seguida acompanhado de arroz branco e batata palha.',
    },
    {
        uid: '17',
        nomeReceita: 'Fricasse de frango',
        tipoReceita: 'Assados',
        dificuldade: 'F??cil',
        tempoPreparo: '30min',
        imagemReceita: require('../../../assets/imagens/foods/fricasseFrango.jpg'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />,
        ingredientes: '??? 1 lata de creme de leite\n??? 1 lata de milho verde\n??? 1 copo de requeij??o cremoso\n??? 100 g de azeitona sem caro??o\n??? 2 peitos de frango desfiados\n??? 200 g de mussarela fatiada\n??? 100 g de batata palha\n??? 1 x??cara de ??gua\n??? 1 pitada de sal',
        modoPreparo: 'Bata no liquidificador o milho, o requeij??o, o creme de leite e a ??gua.\n\nRefogue o creme do liquidificador com o frango desfiado, as azeitonas e o sal at?? ficar com uma textura espessa.\n\nColoque o refogado numa assadeira, cubra com mussarela e espalhe a batata palha por cima.\n\nLeve ao forno at?? borbulhar.\n\nSirva com arroz branco.',
    },
    {
        uid: '18',
        nomeReceita: 'Gelatina',
        tipoReceita: 'Sobremesas',
        dificuldade: 'F??cil',
        tempoPreparo: '10min',
        imagemReceita: require('../../../assets/imagens/foods/gelatina.jpg'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />,
        ingredientes: '??? 1 envelope de gelatina em p?? (o sabor que preferir)\n??? 1 copo de ??gua quente\n??? 1 copo de ??gua gelada\n??? 1 tupperware m??dio',
        modoPreparo: 'Pegue um copo de ??gua, coloque no micro-ondas por 1 minuto para esquentar a ??gua, ou pode mesmo esquent??-la no fog??o, fica a seu crit??rio.\n\nPegue o tupperware m??dio e coloque todo o conte??do da gelatina em p?? nele e jogue a ??gua quente por cima e mexa\n\nPosteriormente jogue tamb??m a ??gua gelada e misture novamente.\n\nColoque na geladeira e pronto.',
    },
    {
        uid: '19',
        nomeReceita: 'Maionese tradicional',
        tipoReceita: 'Saladas',
        dificuldade: 'F??cil',
        tempoPreparo: '30min',
        imagemReceita: require('../../../assets/imagens/foods/maionese.jpg'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />,
        ingredientes: '??? 6 batatas\n??? 3 cenouras\n??? 1 lata de milho\n??? 1 lata de ervilha\n??? Sal, pimenta e or??gano a gosto\n??? Suco de 2 lim??es\n??? Azeite a gosto\n??? 1 pote de maionese',
        modoPreparo: 'Lave a batata e a cenoura.\n\nLeve os para cozinhar.\n\nQuando cozido corte em cubinhos m??dios.\n\nEm uma travessa coloque os legumes picados, a lata de ervilha e milho.\n\nAdicione a quantidade de maionese que preferir.\n\nColoque em seguida o suco de lim??o.\n\nAcrescente sal e pimenta a gosto.\n\nDepois coloque na geladeira e espere esfriar para poder servir.',
    },
    {
        uid: '20',
        nomeReceita: 'Mousse de Chocolate',
        tipoReceita: 'Sobremesas',
        dificuldade: 'M??dio',
        tempoPreparo: '50min',
        imagemReceita: require('../../../assets/imagens/foods/mousseChocolate.jpg'),
        iconeDificuldade: <FontAwesome name="star-half-empty" size={15} color="black" />,
        ingredientes: '??? 1 lata de leite condensado\n??? 1 colher (ch??) de manteiga ou margarina\n??? 1 lata de creme de leite gelado\n??? 3 claras em neve\n??? 4 colheres de achocolatado em p??',
        modoPreparo: 'Leve ao fogo o leite condensado, a manteiga e o achocolatado, mexendo sem parar at?? que a mistura solte do fundo da panela.\n\nReserve e deixa esfriar.\n\nMisture o creme de leite e as claras em neve at?? obter uma mistura homog??nea.\n\nDespeje a massa em um refrat??rio e leve ao congelador por aproximadamente 50 minutos.\n\nSirva bem gelado.',
    },
    {
        uid: '21',
        nomeReceita: 'Omelete',
        tipoReceita: 'Frituras',
        dificuldade: 'F??cil',
        tempoPreparo: '4min',
        imagemReceita: require('../../../assets/imagens/foods/omelete.jpeg'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />,
        ingredientes: '??? 2 ovos\n??? 1 pitada de sal\n??? 1 fatia de presunto\n??? 2 fatias de queijo\n??? tempero verde a gosto\n??? caldo de galinha a gosto',
        modoPreparo: 'Bata os 2 ovos, pode ser na batedeira ou n??o.\n\nAp??s ter batido bem, coloque-o na frigideira j?? untada com ??leo, acrescente o sal, o presunto picado em quadradinhos e as duas fatias de queijo (n??o precisa picar o queijo).\n\nColoque os temperos a gosto, espere ficar firme, e vire o omelete.\n\nEst?? pronto um omelete delicioso, bom apetite!',
    },
    {
        uid: '22',
        nomeReceita: 'Ovo frito',
        tipoReceita: 'Frituras',
        dificuldade: 'F??cil',
        tempoPreparo: '5min',
        imagemReceita: require('../../../assets/imagens/foods/ovoFrito.jpg'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />,
        ingredientes: '??? Ovo\n??? Sal a gosto\n??? Pimenta do reino a gosto\n??? Manteiga ou ??leo ',
        modoPreparo: 'Em uma frigideira, coloque a manteiga ou ??leo e deixa no fogo m??dio.\n\nQuando quente quebre o ovo na frigideira.\n\nEspere fritar, adicione a pimenta e cerca de 3 minutos estar?? pronto',
    },
    {
        uid: '23',
        nomeReceita: 'Pudim',
        tipoReceita: 'Sobremesas',
        dificuldade: 'F??cil',
        tempoPreparo: '60min',
        imagemReceita: require('../../../assets/imagens/foods/pudim.jpg'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />,
        ingredientes: '??? 1 lata de leite condensado\n??? 1 lata de leite (medida da lata de leite condensado)\n??? 3 ovos inteiros\n\nCalda:\n\n??? 1 x??cara (ch??) de a????car\n??? ?? x??cara de ??gua',
        modoPreparo: 'Primeiro, bata bem os ovos no liquidificador.\n\nAcrescente o leite condensado e o leite, e bata novamente.\n\n??? Calda\n\nDerreta o a????car na panela at?? ficar moreno, acrescente a ??gua e deixe engrossar.\n\nColoque em uma forma redonda e despeje a massa do pudim por cima.\n\nAsse em forno m??dio por 45 minutos, com a assadeira redonda dentro de uma maior com ??gua.\n\nEspete um garfo para ver se est?? bem assado.\n\nDeixe esfriar e desenforme.',
    },
    {
        uid: '24',
        nomeReceita: 'Risoto de camar??o',
        tipoReceita: 'Cozidos',
        dificuldade: 'M??dio',
        tempoPreparo: '45min',
        imagemReceita: require('../../../assets/imagens/foods/risotoCamarao.jpg'),
        iconeDificuldade: <FontAwesome name="star-half-empty" size={15} color="black" />,
        ingredientes: '??? 3 x??caras de arroz arb??reo para risoto\n??? 2 colheres de azeite\n??? 1 colher de manteiga\n??? 2 dentes de alho picados\n??? 1 lim??o\n??? ?? x??cara de vinho branco\n??? 400 g de camar??o limpos e sem casca\n??? 1 litro de ??gua fervente ou mais\n??? 1 caldo de camar??o ou de peixe\n??? sal e pimenta-do-reino a gosto\n??? ?? lata de tomate pelados em cubo ou/ 1 tomate sem casca cortado em cubos\n??? 2 colheres (sopa) de molho de tomate\n??? salsinha ou coentro e cebolinha para temperar\n??? 1 x??cara de parmes??o ralado',
        modoPreparo: 'Adicione em uma panela grande com tampa, o azeite, a manteiga, o alho e o arroz.\n\nMexa at?? que o arroz comece a ficar transparente para soltar o amido (n??o deixe queimar).\n\nQuando terminar, jogue o vinho e deixe evaporar, mexendo um pouco.\n\nEnquanto isso, pegue os camar??es, esprema o lim??o, coloque um pouco de sal e deixe descansar por 10 minutos.\n\nAp??s este tempo, apenas retire a ??gua que se formou.\n\nColoque o caldo de camar??o ou peixe na ??gua fervente e adicione a ??gua at?? cobrir o arroz.\n\nAdicione o molho com os tomates e tampe.\n\nBaixe o fogo, mexa de vez em quando e quando come??ar a evaporar, adicione mais ??gua.\n\nV?? colocando ??gua e n??o deixe grudar.\n\nO arroz, no final, deve ficar sem l??quido e cremoso.\n\nAssim que chegar no ponto, adicione o requeij??o, o cheiro-verde, o parmes??o e o camar??o\n\nExperimente, ajuste o sal e pimenta-do-reino.\n\nDesligue o fogo, mexa bem.\n\nTampe por 5 minutos e sirva.',
    },
    {
        uid: '25',
        nomeReceita: 'Strogonoff de Frango',
        tipoReceita: 'Cozidos',
        dificuldade: 'M??dio',
        tempoPreparo: '40min',
        imagemReceita: require('../../../assets/imagens/foods/strogonoffFrango.jpg'),
        iconeDificuldade: <FontAwesome name="star-half-empty" size={15} color="black" />,
        ingredientes: '??? Fil?? de frango (cerca de 750 g)\n??? 200 g de cogumelos (de sua prefer??ncia)\n??? 1 cebola\n??? 2 dentes de alho\n??? 1 ?? colher (sopa) de mostarda \n??? 1 ?? colher (sopa) de ketchup\n??? 1 ?? colher (sopa) de molho ingl??s\n??? 1 ?? x??cara (ch??) de creme de leite de caixinha\n??? azeite a gosto\n??? sal e pimenta-do-reino ',
        modoPreparo: 'Corte o peito de frango em cubos m??dios.\n\nCorte os cogumelos em tr??s fatias (os menores corte apenas ao meio). \n\nDescasque e pique fino a cebola e os dentes de alho. \n\nAque??a uma panela no fogo m??dio, depois regue com 1 colher (sopa) de azeite doure e cebola e o alho. \n\nAp??s dourar os legumes adicione o frango e refogue junto com o alho e cebola. \n\nAdicione logo em seguida os temperos (pimenta do reino e sal)\n\nQuando tudo estiver dourado, e a ??gua estiver quase secando (??gua essa do pr??prio frango) adicione o Ketchup, Mostarda e o Molho ingl??s. \n\nProve a comida e verifique se falta sal, caso faltar adicione um pouco mais e logo em seguida adicione o creme de leite. \n\nEspere cozinhar por mais 1 minuto e estar?? pronto ',
    },
    {
        uid: '26',
        nomeReceita: 'Torta de Frango',
        tipoReceita: 'Massas',
        dificuldade: 'M??dio',
        tempoPreparo: '40min',
        imagemReceita: require('../../../assets/imagens/foods/tortaFrango.jpg'),
        iconeDificuldade: <FontAwesome name="star-half-empty" size={15} color="black" />,
        ingredientes: 'Recheio:\n\n500 g de peito de frango sem pele\n??? ?? litro de caldo de galinha\n??? 4 colheres (sopa) de ??leo\n??? 1 dente de alho amassado\n??? 1 cebola picada\n??? 3 tomates sem pele e sem sementes\n??? 1 x??cara (ch??) de ervilhas\n??? sal e pimenta-do-reino a gosto\n\nMassa:\n\n250 ml de leite\n??? 3/4 de x??cara (ch??) de ??leo\n??? 2 ovos\n??? 1 e ?? x??cara (ch??) de farinha de trigo\n??? sal a gosto\n??? 1 colher (sopa) de fermento em p??\n??? queijo ralado a gosto',
        modoPreparo: '??? Recheio:\n\nCozinhe o peito de frango no caldo at?? ficar macio.\n\nSepare 1 x??cara (ch??) de caldo do cozimento e reserve.\n\nRefogue os demais ingredientes e acrescente as ervilhas por ??ltimo.\n\nDesfie o frango, misture ao caldo e deixe cozinhar at?? secar.\n\n??? Massa:\n\nBata o leite, o ??leo e os ovos no liquidificador em velocidade baixa.\n\nAcrescente aos poucos a farinha, o sal e o fermento.\n\nDespeje metade da massa em uma forma untada e adicione o recheio sobre ela.\n\nCubra com o restante de massa e o queijo ralado.\n\nLeve ao forno preaquecido (180?? C) at?? dourar.',
    },
    {
        uid: '27',
        nomeReceita: 'Salada de Vegetais',
        tipoReceita: 'Saladas',
        dificuldade: 'F??cil',
        tempoPreparo: '30min',
        imagemReceita: require('../../../assets/imagens/foods/SALADA.jpg'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />,
        ingredientes: '??? 1 batata m??dia em cubos pequenos\n??? 1 cenoura m??dia em cubos pequenos\n??? meia x??cara (ch??) de vagem em peda??os pequenos\n??? meia x??cara (ch??) de ervilhas frescas\n??? 1 pote de Iogurte Tradicional\n??? 1 colher (sopa) de azeite\n??? 1 colher (sopa) de mostarda\n??? 1 pitada de pimenta-do-reino\n??? 1 colher (ch??) de sal\n??? 10 azeitonas verdes picadas\n??? meia cebola roxa bem picada\n??? 3 colheres (sopa) de cebolinha-verde picada\n??? 1 colher (sopa) de salsa picada',
        modoPreparo: 'Em uma panela com ??gua fervente e sal coloque a batata, a cenoura e a vagem. Cozinhe por 5 minutos.\n\nJunte as ervilhas e deixe finalizar o cozimento at?? que tudo esteja macio, por??m sem desmanchar (cerca de 10 minutos).\n\nEscorra e reserve.\n\nEm um recipiente grande misture o Iogurte, o azeite, a mostarda, a pimenta-do-reino e o sal.\n\nJunte os legumes reservados, as azeitonas, a cebola, a cebolinha e a salsa e misture delicadamente.\n\nCubra com pl??stico-filme e deixe gelar at?? o momento de servir.'
    },
    {
        uid: '28',
        nomeReceita: 'Frango a Passarinho',
        tipoReceita: 'Frituras',
        dificuldade: 'F??cil',
        tempoPreparo: '60min',
        imagemReceita: require('../../../assets/imagens/foods/frango.jpg'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />,
        ingredientes: '??? 10 asas de frango\n??? 4 dentes de alho amassados\n??? suco de 1 lim??o\n??? 1 colher (sopa) de azeite\n??? ??leo para fritar\n??? p??prica a gosto\n??? sal a gosto\n??? pimenta tabasco a gosto',
        modoPreparo: 'Em uma tigela, adicione o alho, o sal, a pimenta, o lim??o, a p??prica e o ??leo, depois misture com uma colher.\n\nAdicione os peda??os de frango e misture com as m??os at?? que os peda??os estejam completamente temperados, depois deixe descansar por 30 minutos.\n\nEm uma panela grande, adicione o ??leo e aque??a-o, depois despeje o frango e deixe fritar at?? que esteja bem dourado dos dois lados.'
    },
    {
        uid: '29',
        nomeReceita: 'P??o de Alho para churrasco',
        tipoReceita: 'Churrasco',
        dificuldade: 'F??cil',
        tempoPreparo: '10min',
        imagemReceita: require('../../../assets/imagens/foods/paoAlho.jpg'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />,
        ingredientes: '??? 6 p??es franceses (m??dios)\n??? 1 vidro pequeno de maionese\n??? 2 colheres (sopa) de alho picadinho\n??? 1 colher (sopa) n??o muito cheia de or??gano\n??? 1/2 x??cara (ch??) de cheiro-verde picado\n??? 1/2 x??cara (ch??) de parmes??o ralado\n??? sal e pimenta a gosto',
        modoPreparo: 'Em um recipiente misture a maionese, o alho, o or??gano, o cheiro-verde, o sal e a pimenta e reserve.\n\nFa??a cortes horizontais no p??o franc??s de maneira a formar pequenas fatias (mais ou menos 4), mas sem desprend??-las umas das outras (como no p??o de alho comprado).\n\nPasse a mistura reservada entre as fatias e depois envolvendo todo os p??es.\n\nPolvilhe sobre os p??es o parmes??o ralado.\n\nLeve ?? churrasqueira e asse bem de ambos os lados.'
    },
    {
        uid: '30',
        nomeReceita: 'Espetinho de Carne',
        tipoReceita: 'Churrasco',
        dificuldade: 'F??cil',
        tempoPreparo: '10min',
        imagemReceita: require('../../../assets/imagens/foods/espetinho.jpeg'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />,
        ingredientes: '??? 300 g de alcatra\n??? sal a gosto\n??? pimenta-do-reino a gosto\n??? salda desidratada a gosto\n??? bacon 300 g\n??? 1 piment??o verde\n??? 1 pioment??o vermelho\n??? 1 cebola',
        modoPreparo: 'Corte a alcatra em pequenos cubos e tempere com sal, pimenta-do-reino e salsinha desidratada.\n\nCorte o piment??o verde, vermelho, a cebola e o bacon em peda??os pequenos.\n\nPegue os palitos de de churrasco e comece a montar o espetinho.\n\nPrimeiro espete o bacon, depois o piment??o vermelho, a cebola, a alcatra, o piment??o verde e assim por diante.\n\nLeve a churrasqueira e tempere os espetinhos com sal grosso.\n\nCozinhe at?? o ponto desejado.'
    },
    {
        uid: '31',
        nomeReceita: 'Bolo de Milho',
        tipoReceita: 'Bolos',
        dificuldade: 'F??cil',
        tempoPreparo: '55min',
        imagemReceita: require('../../../assets/imagens/foods/boloMilho.jpg'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />,
        ingredientes: '??? 1 lata de milho verde com ??gua e tudo\n??? Meia lata da mesma de ??leo\n??? 1 lata da mesma de a????car\n??? Meia lata da mesma de fub??\n??? 4 ovos\n??? 2 colheres bem cheias de farinha de trigo\n??? 2 colheres de coco ralado\n??? 1 colher e meia de ch?? bem cheia de fermento em p??',
        modoPreparo: 'Bata bastante todos os ingredientes no liquidificador. Depois acrescente coco ralado, fermento e misture. Coloque para assar.\n\nColoque na forma redonda com buraco e na quadrada. A forma dever?? ser untada e enfarinhada.\n\nO tempo de preparo na redonda ?? mais r??pido, mas a receita fica menor. Para aumentar, fa??a com o dobro dos ingredientes.\n\nO bolo fica parecendo pamonha, bem cremoso, uma delicia!\n\nLeve ao forno preaquecido a 180 graus Celsius por, aproximadamente, 40 minutos.'
    },
    {
        uid: '32',
        nomeReceita: 'Bolo de cenoura com cobertura de brigadeiro',
        tipoReceita: 'Bolos',
        dificuldade: 'F??cil',
        tempoPreparo: '70min',
        imagemReceita: require('../../../assets/imagens/foods/boloCenoura.jpg'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />,
        ingredientes: 'Massa do bolo de cenoura\n\n??? 3 cenouras m??dias (250g)\n??? 4 ovos\n??? meia x??cara (ch??) de ??leo\n??? 2 e meia x??caras (ch??) de farinha de trigo\n??? 2 x??caras (ch??) de a????car\n??? 1 colher (sopa) de fermento em p??\n\nCobertura de Brigadeiro\n\n??? 1 Leite MO??A (lata ou caixinha) 395g\n??? 1 colher (sopa) de manteiga\n??? meia x??cara (ch??) de Chocolate em P??\n??? meia x??cara (ch??) de chocolate granulado',
        modoPreparo: 'Massa do Bolo de Cenoura\n\nEm um liquidificador, bata as cenouras, os ovos e o ??leo.\n\nDespeje a mistura em um recipiente e misture o a????car e a farinha de trigo peneirada com o fermento.\n\nColoque em uma f??rma retangular (20 x 30 cm) untada, e leve ao forno m??dio (180??C), preaquecido, por 40 minutos.\n\nEnquanto isso, prepare a cobertura de brigadeiro.\n\nCobertura de Brigadeiro\n\nEm uma panela coloque o Leite MO??A, o Chocolate em P?? e a manteiga e leve ao fogo baixo, mexendo sempre, at?? come??ar a desprender da panela.\n\nDespeje ainda quente sobre o bolo, distribua o chocolate granulado e deixe esfriar.'
    },
    {
        uid: '33',
        nomeReceita: 'Bolo de Fub??',
        tipoReceita: 'Bolos',
        dificuldade: 'F??cil',
        tempoPreparo: '30min',
        imagemReceita: require('../../../assets/imagens/foods/boloFuba.jpg'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />,
        ingredientes: '??? 3 ovos inteiros??? 2 x??caras (ch??) de a????car\n??? 2 x??caras (ch??) de fub??\n??? 3 colheres (sopa) de farinha de trigo\n??? 1/2 copo (americano) de ??leo\n??? 1 copo (americano) de leite\n??? 1 colher (sopa) de fermento em p??',
        modoPreparo: 'Em um liquidificador, adicione os ovos, o a????car, o fub??, a farinha de trigo, o ??leo, o leite e o fermento, depois bata at?? a massa ficar lisa e homog??nea.\n\nDespeje a massa em uma forma untada e polvilhada.\n\nLeve para assar em forno m??dio 180 ??C preaquecido por 40 minutos.',
    },
    {
        uid: '34',
        nomeReceita: 'Hamb??rguer ?? parmegiana',
        tipoReceita: 'Hamb??rgueres',
        dificuldade: 'F??cil',
        tempoPreparo: '25min',
        imagemReceita: require('../../../assets/imagens/foods/hamburguerParmegiana.jpg'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />,
        ingredientes: '??? 200 gramas de carne mo??da de primeira por hamb??rguer (cox??o mole, alcatra ou patinho)\n??? Sal e demais temperos ?? gosto (pimenta do reino, lemon pepper, chimichurri, etc)\n??? P??o de hamb??rguer ou o acompanhamento de sua escolha\n??? 2 fatias de queijo mussarela por hamb??rguer\n??? 2 colheres (sopa) de molho de tomate\n??? 1 dente de alho picado ou mo??do\n??? Meia cebola bem picada\n??? 1 tomate bem picado',
        modoPreparo: 'Tempere o hamb??rguer com metade do alho e cebola picadas\n\nAdicione sal demais temperos ?? gosto e misture\n\nMolde o hamb??rguer no tamanho e formato desejado e reserve\n\nEm uma panela, refogue o restante da cebola e do alho\n\nQuando dourar, adicione o tomate e refogue um pouco mais\n\nAdicione o extrato ou molho de tomate e um pouco de ??gua\n\nDeixe cozinhar um pouco at?? ficar no ponto desejado e reserve\n\nColoque um fio de ??leo ou azeite em uma frigideira e esquente em fogo alto\n\nQuando estiver saindo fuma??a, coloque o hamb??rguer para selar\n\nAssim que estiver dourado e selado de um lado, vire o hamb??rguer\n\nQuando estiver pr??ximo de ficar pronto no ponto desejado, adicione as fatias de mu??arela por cima e tampe a frigideira at?? o queijo derreter\n\nColoque o hamb??rguer pronto no p??o ou junto com o acompanhamento desejado (arroz, por exemplo) e adicione o molho por cima; e sirva!',
    },
    {
        uid: '35',
        nomeReceita: 'Hamb??rguer com cheddar e cebola caramelizada',
        tipoReceita: 'Hamb??rgueres',
        dificuldade: 'F??cil',
        tempoPreparo: '40min',
        imagemReceita: require('../../../assets/imagens/foods/hamburguerCheddarCebola.jpg'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />,
        ingredientes: '??? 800 gramas de carne mo??da\n??? Molho Shoyu\n??? 1 colher de ch?? de sal\n??? 1 colheres de ch?? de pimenta-do-reino preta mo??da na hora\n??? 3 colheres de sopa de ??leo\n??? 4 fatias de queijo cheddar\n??? 4 colheres de sopa de Maionese\n??? 4 p??es para hamb??rguer brancos\n??? 1 cebola roxa fatiada\n??? 1 colher de ch?? de margarina\n??? ?? colher de sopa de a????car mascavo\n??? 1 colher de sopa de molho de soja',
        modoPreparo: 'Aque??a rapidamente uma panela larga e adicione a margarina. Quando come??ar a derreter acrescente a cebola e cozinhe em fogo m??dio, mexendo sempre. Quando a cebola estiver dourada junte o molho shoyu, o a????car mascavo e cozinhe at?? dourar. Reserve.\n\nTempere a carne com sal e pimenta do reino.\n\nSepare a carne em 4 por????es. Molde os 4 hamb??rgueres com a ajuda de um aro de metal ou na palma das m??os. Embale em papel filme e leve ?? geladeira por 1 hora.\n\nAque??a bem uma grelha ou frigideira e unte com ??leo. Quando estiver bem quente grelhe o hamb??rguer at?? que os dois lados fiquem bem dourados.\n\nColoque os hamb??rgueres grelhados numa t??bua e disponha as fatias de queijo por cima. Abafe com uma tampa de panela para que o queijo derreta.\n\nMonte os hamb??rgueres passando a maionese nos dois lados dos p??es, coloque o hamb??rguer com o queijo por cima e finalize com as cebolas caramelizadas.',

    },
    {
        uid: '36',
        nomeReceita: 'Frango assado com lim??o e alho',
        tipoReceita: 'Assados',
        dificuldade: 'F??cil',
        tempoPreparo: '60min',
        imagemReceita: require('../../../assets/imagens/foods/frangoAssado.jpg'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />,
        ingredientes: '??? Frango em peda??os: 1 kg\n??? Alho amassado: 4 dente(s)\n??? Lim??o: 1 unidade\n??? Sal: 1 colher de sopa\n??? Batatas lavadas, com cascas e cortadas em 4 : 3 unidades',
        modoPreparo: 'Na noite anterior, tempere o frango com o sal, o alho amassado e o suco de lim??o. Espalhe bem, cubra com filme pl??stico e leve para geladeira.\n\nNo dia seguinte, retire o frango da geladeira 2h antes de servir. Deixe 1h em temperatura ambiente para desgelar.\n\nPreaque??a o forno a 200??, transfira o frango par uma assadeira grande, coloque as batatas e leve ao forno para assar por 1h.\n\nRetire do forno e sirva em seguida.',
    },
    {
        uid: '37',
        nomeReceita: 'Churrasco completo',
        tipoReceita: 'Churrasco',
        dificuldade: 'M??dio',
        tempoPreparo: '+2h',
        imagemReceita: require('../../../assets/imagens/foods/churrascoCompleto.jpg'),
        iconeDificuldade: <FontAwesome name="star-half-empty" size={15} color="black" />,
        ingredientes: '300-400 g de carne por pessoa:picanha inteira ou cortada\n??? lombo de porco\n??? lingui??a\n??? costelinha de porco\n??? frango aos peda??os\n??? cora????o de frango\n??? sal grosso\n??? pimenta-do-reino',
        modoPreparo: 'Acender o fogo em anteced??ncia para que se formem brasas, que a fuma??a inicial desapare??a e que se forme uma camada fina de fuligem sobre as brasas, que impede que se levantem labaredas que estragam a carne.\n\nQuando necess??rio, para manter o fogo aceso, colocar delicadamente um pedacinho de carv??o um de cada vez, que evita a forma????o de labaredas.\n\nAs carnes podem ser previamente marinadas ou simplesmente temperadas com sal grosso na hora de assar.\n\nPara conservar os sucos dentro da carne ?? necess??rio ???selar??? a carne colocando-a por alguns minutos perto das chamas, sem deixar queimar, e depois terminar de assar na parte mais alta da churrasqueira.\n\nOs peda??os grandes de carne devem ser embrulhados em papel alum??nio e s??o os primeiros a serem colocados na churrasqueira, na parte alta longe das brasas, para iniciar o cozimento lentamente. Passados 30 minutos retirar o alum??nio e deixar dourar.\n\nColocar as outras carne, iniciando pelo frango, depois as costelinhas de porco, as lingui??as e os cora????es de frango.\n\nVirar a carne frequentemente e regar com salmoura ou cerveja.\n\nNa hora de servir retirar o excesso de sal grosso.\n\nOs cora????ezinhos devem ser os primeiros a serem servidos, come antepasto, junto com outros tira-gosto.',
    },
    {
        uid: '38',
        nomeReceita: 'Arroz branco',
        tipoReceita: 'Cozidos',
        dificuldade: 'F??cil',
        tempoPreparo: '30min',
        imagemReceita: require('../../../assets/imagens/foods/arrozBranco.jpg'),
        iconeDificuldade: <FontAwesome name="star-o" size={15} color="black" />,
        ingredientes: '??? 2 dentes de alho picados\n??? 1 fio (sopa) de ??leo\n??? 1 colher (ch??) de sal\n??? 2 x??caras de arroz\n??? 3 x??caras de ??gua quente',
        modoPreparo: 'Lave bem o arroz.\n\nColoque a ??gua para ferver.\n\nSoque o alho picado.\n\nEm seguida, numa panela, coloque o alho picado e socado, espere.\n\nAcrescente ent??o o ??leo e deixe dourar.\n\nQuando o alho come??ar a suar, adicione o arroz.\n\nRefogue o arroz, e em seguida, coloque a ??gua quente e o sal.\n\nBaixe o fogo, deixe a panela semi-tampada e deixe cozinhar at?? a ??gua secar.\n\nPronto.'
    }


]

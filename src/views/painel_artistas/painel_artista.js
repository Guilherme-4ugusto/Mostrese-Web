import React, {useEffect, useState, forwardRef} from 'react';
import isAutenticated from '../../utils/auth';
import Navbar from "../../components/navbar/index";
import Footer from '../../components/footer/footer';
import { Redirect, useHistory} from 'react-router-dom';
import * as S from '../painel_artistas/style';
import api from '../../services/api';
import MaterialTable from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import DeleteIcon from '@mui/icons-material/Delete';
import RefreshIcon from '@mui/icons-material/Refresh';
import EditIcon from '@mui/icons-material/Edit';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { minHeight } from '@mui/system';

export default function ActionAreaCard() {
  const [redirect, setRedirect] = useState(false);
  const [artistas, setArtistas] = useState([]);
  const useMountEffect = (fun) => useEffect(fun, [])
  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };
  const history = useHistory();
  const Swal = require('sweetalert2');

  const styleTable = {
    borderRadius: '0px',
    background: '#F5F5F5',
  }

  function abrirGerenciador(data){
    history.push(`/artistas/gerenciar/${data._id}`);
  }

  function irParaAdicionarArtista(){
    history.push(`/artistas/gerenciar/`);
  }

  const localization = {
    body: {
      emptyDataSourceMessage: 'Sem dados para exibir',
      deleteText: 'Tem de que deseja exlcuir esta linha?',
      emptyDataSourceMessage: 'Sem dados para exibir',
      addTooltip: 'Adicionar',
      deleteTooltip: 'Deletar',
      editTooltip: 'Editar',
      filterRow: {
        filterPlaceHolder: 'Filtrar',
        filterTooltip: 'Filtrar',
      },
      editRow: {
        deleteText: 'Tem certeza de que deseja excluir?',
        cancelTooltip: 'Cancelar',
        saveTooltip: 'Salvar',
      },
    },
    grouping: {
      placeholder: 'Arraste o título da coluna para agrupar as linhas',
      groupedBy: 'Agrupar por: ',
    },
    header: {
      actions: 'Ações',
    },
    pagination: {
      labelDisplayedRows: '{count} de {from}-{to}',
      labelRowsSelect: 'linhas',
      labelRowsPerPage: 'Linhas por página: ',
      firstAriaLabel: 'Primeira página',
      firstTooltip: 'Primeira página',
      previousAriaLabel: 'Página anterior',
      previousTooltip: 'Página anterior',
      nextAriaLabel: 'Próxima página',
      nextTooltip: 'Próxima página',
      lastAriaLabel: 'Última página',
      lastTooltip: 'Última página',
    },
    toolbar: {
      addRemoveColumns: 'Adicionar ou remover colunas',
      nRowsSelected: '{0} linhas(s) selecionadas',
      showColumnsTitle: 'Mostrar colunas',
      showColumnsAriaLabel: 'Mostrar colunas',
      exportTitle: 'Exportar',
      exportAriaLabel: 'Exportar',
      exportName: 'Exportar como CSV',
      searchTooltip: 'Pesquisar',
      searchPlaceholder: 'Pesquise aqui...',
    },
  }

  async function buscarArtistas() {
    await api.get(`/artista`)
    .then(response => {
      setArtistas(response.data)
    })
  }

  async function excluirArtista(data) {
    Swal.fire({
      title: 'Ei amigo!! Tem certeza que vai deletar esse artista?',
      text: "Esse é um caminho sem volta!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Sim, delete!'
    }).then((result) => {
      if (result.isConfirmed) {
        api.delete(`/artista/${data._id}`, { 
          headers: {
            autorizacao: `Bearer ${localStorage.getItem('@mostrese/token')}`
          }

        })
        Swal.fire(
          'Deletada!',
          'Apagamos o artista para você!',
          'success'
        )
      }
    })
  }

  useEffect(() => {
    if(!isAutenticated && !localStorage.getItem('@mostrese/token')){
      setRedirect(true);
    }
  })

  useMountEffect(buscarArtistas)

  return (
    <S.Container >
      {redirect && <Redirect to="/" />}
      <S.ContentNavbar>
        <Navbar />
      </S.ContentNavbar> 
      <MaterialTable
          options={{
            actionsColumnIndex: -1,
            exportButton: true,
            headerStyle: {
              backgroundColor: '#F5F5F5'
            },
            pageSize: 8,
            pageSizeOptions: [8, 16, 24]
          }}
          icons={tableIcons}
          localization={localization}
          title="Artistas"
          columns={[
            { fiel: 'url', title: 'Foto', render: rowData => <img src={rowData.link_aws_image} style={{width: 70, height: 70,borderRadius: '50%', objectFit: 'cover'}}/>},
            { title: 'Nome', field: 'name' },
            { title: 'Nascimento', field: 'birth_date' },
            { title: 'Telefone', field: 'phone'},
            { title: 'Email', field: 'email'},
            { title: 'Categoria', field: 'category'}
          ]}
          actions={[
            {
              icon: () => <DeleteIcon />,
              tooltip: 'Deletar Artista',
              onClick: (event, rowData) => excluirArtista(rowData)    
            },
            {
              icon: () => <EditIcon />,
              tooltip: 'Editar Artista',
              onClick: (event, rowData) => abrirGerenciador(rowData)    
            },
            {
              icon: () => <RefreshIcon />,
              tooltip: 'Atualizar tabela',
              isFreeAction: true,
              onClick: () => buscarArtistas()
            },
            {
              icon: () => <PersonAddAlt1Icon />,
              tooltip: 'Adicionar Artista',
              isFreeAction: true,
              onClick: () => irParaAdicionarArtista()
            }
          ]}
          data={artistas}
          style={styleTable}
        />
      <Footer />
    </S.Container>
  );
}
import antdLocale from 'antd/es/locale/id_ID'

export default {
  antdLocale,
  table: {
    actions: {
      multipleDeleteConfirm: (count: any = 0) => `Apakah Anda yakin untuk menghapus data ${count} yang dipilih`,
      multipleDelete: 'Batch menghapus',
      deleteConfirm: 'Apakah Anda yakin untuk menghapus?',
      delete: 'Hapus',
      refreshTip: 'Segar tabel',
    },
    editField: {
      add: 'Tambah',
      details: 'Details',
      edit: 'Edit',
      saveTips: 'Data tidak disimpan akan hilang, kau yakin?',
    },
    queryField: {
      query: 'Pertanyaan',
      reset: 'Reset',
      fold: 'Fold',
      more: 'Lebih',
    },
    modal: {
      confirm: 'Ok',
      okText: 'Ok',
      cancelText: 'Batalkan',
    },
    table: {
      selectionTips: (count: any = 0) => `${count} item dipilih`,
      deselect: 'Nyahpilih',
      inverse: 'Pemilihan terbalik',
      action: 'Aksi',
      totalDataCount: (total: any = 0) => `${total} total`,
      edit: 'Edit',
      save: 'Save',
      cancel: 'Batalkan',
      cancelConfirm: 'Apakah Anda yakin untuk membatalkan?',
      density: 'Kepadatan tabel',
      densityLarger: 'Lebih besar',
      densityMiddle: 'Tengah',
      densitySmall: 'Kecil',
      idnex: 'Index',
    },
    valueType: {
      inputPassword: 'Kata sandi masukan',
      inputContent: 'Input isi',
      chooseContent: 'Pilih isi',
      startTime: 'Waktu awal',
      endTime: 'Waktu akhir',
    },
  },
}

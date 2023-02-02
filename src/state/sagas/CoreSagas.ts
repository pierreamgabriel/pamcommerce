import axios from "axios";
import { call, put } from "redux-saga/effects";
import { setStatus, appendProducts } from "../";

interface DataProps {
  task: string;
  data: {};
  type: string;
}

interface ResponseProps {
  data: {
    error: boolean;
    msg: string;
    all_data: [];
  };
}

const callProductsApi = async (arg: any) => {
  const data = await axios.post("../api/products.php", {
    ...arg.payload,
    task: arg.task,
  });
  return data;
};
const callReadDeleteApi = async (arg1: string, arg2: string) => {
    console.log(arg2)
  const data = await axios.post("../api/read-delete.php", {
    task: arg1,
    table: arg2,
  });
  return data;
};
function* products(data: DataProps) {
  if (data.task === "add") {
    yield put(setStatus({ key: "isSaving", value: true }));
    try {
      const response: ResponseProps = yield call(callProductsApi, data);
      if (response.data.error) {
        yield put(
          setStatus({
            key: "isSavingProductError",
            value: { status: true, msg: response.data.msg },
          })
        );
      }
    } catch (error) {
    } finally {
      yield put(setStatus({ key: "isSaving", value: false }));
    }
  }
}
function* productsList() {
  yield put(setStatus({ key: "isLoading", value: true }));
  try {
    const response: ResponseProps = yield call(
      callReadDeleteApi,
      "read",
      "products"
    );
    if (response.data.error) {
      yield put(
        setStatus({
          key: "isLoadingError",
          value: true,
        })
      );
    } else {
      yield put(
        appendProducts({ key: "productsList", value: response.data.all_data })
      );
    }
  } catch (error) {
  } finally {
    yield put(setStatus({ key: "isLoading", value: false }));
  }
}
export const CoreSagas = {
  products,
  productsList,
};

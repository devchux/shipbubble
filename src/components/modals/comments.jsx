import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Button from "../buttons/button";

const Comments = ({ isOpen, toggle }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={toggle}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Comments
                </Dialog.Title>
                <hr />
                <div className="mt-2">
                  <div className="max-h-80 overflow-y-auto">
                    <div className="py-2">
                      <h4 className="mb-0">id labore ex et quam laborum</h4>
                      <small>Eliseo@gardner.biz</small>
                      <p className="mt-2 pb-2 text-sm text-gray-500">
                        Your payment has been successfully submitted. We’ve sent
                        you an email with all of the details of your order.
                      </p>
                      <hr />
                    </div>
                    <div className="py-2">
                      <h4 className="mb-0">id labore ex et quam laborum</h4>
                      <small>Eliseo@gardner.biz</small>
                      <p className="mt-2 pb-2 text-sm text-gray-500">
                        Your payment has been successfully submitted. We’ve sent
                        you an email with all of the details of your order.
                      </p>
                      <hr />
                    </div>
                    <div className="py-2">
                      <h4 className="mb-0">id labore ex et quam laborum</h4>
                      <small>Eliseo@gardner.biz</small>
                      <p className="mt-2 pb-2 text-sm text-gray-500">
                        Your payment has been successfully submitted. We’ve sent
                        you an email with all of the details of your order.
                      </p>
                      <hr />
                    </div>
                    <div className="py-2">
                      <h4 className="mb-0">id labore ex et quam laborum</h4>
                      <small>Eliseo@gardner.biz</small>
                      <p className="mt-2 pb-2 text-sm text-gray-500">
                        Your payment has been successfully submitted. We’ve sent
                        you an email with all of the details of your order.
                      </p>
                      <hr />
                    </div>
                    <div className="py-2">
                      <h4 className="mb-0">id labore ex et quam laborum</h4>
                      <small>Eliseo@gardner.biz</small>
                      <p className="mt-2 pb-2 text-sm text-gray-500">
                        Your payment has been successfully submitted. We’ve sent
                        you an email with all of the details of your order.
                      </p>
                      <hr />
                    </div>
                    <div className="py-2">
                      <h4 className="mb-0">id labore ex et quam laborum</h4>
                      <small>Eliseo@gardner.biz</small>
                      <p className="mt-2 pb-2 text-sm text-gray-500">
                        Your payment has been successfully submitted. We’ve sent
                        you an email with all of the details of your order.
                      </p>
                      <hr />
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <Button grey type="button" onClick={toggle}>
                    Close
                  </Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Comments;
